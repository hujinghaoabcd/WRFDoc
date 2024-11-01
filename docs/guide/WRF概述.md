---
lang: zh-CN
title: WRF概述
date: 2024-10-01
description: WRF概述
---

<style>
    .theme-default-content table {
    width: 100%; /* 表格宽度填满页面 */
    margin: auto;
    table-layout: fixed; /* 固定表格布局，确保列宽分配均匀 */
    border-collapse: collapse;
  }
  .theme-default-content table td {
    padding: 10px;
    width: 340px;
  }
</style>

# 1 WRF 概述

高级研究版 WRF（WRF-ARW）模型历经多年的开发，目前最新版本已在 WRF [GitHub](https://github.com/wrf-model/WRF/releases)仓库中发布。WRF 模型作为一个灵活且先进的大气模拟系统，能够在并行计算平台上高效运行，并具有出色的可移植性。它支持从米级到数千公里的多尺度应用，适用于广泛的应用场景，包括：

| 研究应用 |    功能性应用    |
| :------: | :--------------: |
|  参数化  |    理想化模拟    |
| 数据同化 | 实时数值天气预报 |
|   预测   |     模型耦合     |
| 热带气旋 |       教学       |
| 区域气候 |                  |
| 火灾模拟 |                  |

## 1.1 WRF 系统构成

以下是 WRF 建模系统的流程图:

![_images/wrf_system_flow_chart.png](/images/wrf_system_flow_chart.png)

如图所示，WRF 建模系统包括以下程序：

- [WRF 预处理系统（WPS）](https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/overview.html#wrf-preprocessing-system)
- [初始化程序](https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/overview.html#wrf-initialization-programs)（Real 和 Ideal）
- [WRF-ARW 求解器](https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/overview.html#wrf-arw-solver)
- [WRF 数据同化（WRFDA）](https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/overview.html#wrf-data-assimilation)
- [后处理、分析和可视化工具](https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/overview.html#post-processing-analysis-and-visualization-tools)

### 1.1.1 WRF 预处理系统（WPS）

WPS 用于实际数据的模拟，其功能包括：1）定义模拟区域；2）将地形、土地利用和土壤类型等地理数据插值到模拟区域；3）从外部模型获取气象输入数据并插值到模拟区域。

### 1.1.2 WRF 初始化程序

WRF 模型支持实际数据和理想数据的模拟。ideal.exe 程序用于在受控环境下进行模拟，采用预设的初始条件文件并假设简化的地形。对于实际数据模拟，使用 WPS 生成的输出数据，包括由外部分析或预报模型（如 GFS）提供的气象输入数据，作为 real.exe 程序的输入。

### 1.1.3 WRF-ARW 求解器

*wrf.exe*程序是整个建模系统的核心组件。

**主要特性**

- 完全可压缩的非静力方程，并带有静力选项
- 包含完整的科氏力和曲率项
- 基于质量的混合 sigma-压力垂直坐标
- 支持多种地图投影方式，提供比例因子调整地理区域大小：
  - 极地立体投影（等角）
  - 兰伯特等角投影
  - 墨卡托投影（等角）
  - 可旋转的经纬度
- Arakawa C 荒川交错网格
- 采用一种标量守恒的通量形式计算预报变量
- 采用上边界吸收和瑞利阻尼技术
- 侧边界条件的设置方式:
  - 理想化案例：采用几种简单的边界条件(周期性、对称性或开放辐射)
  - 实际案例：使用指定缓冲区的边界条件减小边界效应
- 提供一套完整的地表、行星边界层、大气和地表辐射、微物理和积云对流物理选项
- 采用地形重力波拖曳模拟空气流过地形时的重力波效应

**其他选项**

- 区域和全球应用
- 多嵌套区域的双向嵌套
- 多嵌套区域的并行单向嵌套
- 带垂直嵌套的离线单向嵌套
- 移动嵌套（指定移动和涡旋追踪）
- 垂直网格间距随高度变化
- 龙格库塔二阶和三阶时间积分选项
- 二阶至六阶的平流选项（水平和垂直）
- 湿度、标量、示踪物和湍流动能（TKE）的单调传输和正定平流选项
- 加权基本无震荡（WENO）平流选项
- 声波和重力波模式的时间分裂小步计算：
  - 水平方向为显式，垂直方向为隐式
  - 散度阻尼选项与垂直时间偏心设置
  - 外部模式滤波选项
- 海洋模型
- 网格分析校正：使用高空和地面数据进行校正，以及观测数据校正
- 谱校正
- 数字滤波初始化
- 自适应时间步长
- 随机参数化方案
- 若干理想化案例

### 1.1.4 WRF 数据同化（WRFDA）

WRF 数据同化 (WRFDA) 是一个可选程序，用于将观测数据引入由 WPS 创建的插值分析中。WRFDA 还可以通过“循环”模式运行来更新 WRF 模型的初始条件。WRFDA 的主要功能包括：

- 支持 3D 和 4D 混合数据同化（变分+集合方法）
- 基于增量变分数据同化技术
- WRF 的切线性和伴随模型与 WRF 完全集成，以支持 4D-Var
- 使用共轭梯度法，在分析控制变量空间中最小化目标函数
- 在无交错的 Arakawa A 网格上进行分析
- 将分析增量插值到交错的 Arakawa C 网格，并将其加入背景场（初始猜测）中，得到 WRF 模型网格的最终分析
- 常规观测数据可通过 obsproc 工具以 ASCII 格式或 PREPBUFR 格式提供输入
- 多源卫星观测数据可通过 BUFR 格式提供输入
- 接入两个快速辐射传输模型 CRTM 和 RTTOV，以支持卫星辐射观测操作
- 针对卫星辐射数据同化的变分偏差校正
- 全天空辐射数据同化能力
- 多雷达数据（反射率和径向速度）输入支持 ASCII 格式
- 多个外循环以处理非线性问题
- 具备伴随敏感度计算功能
- 水平背景场误差（初始猜测）通过递归滤波器（区域应用）或功率谱（全球应用）表示
- 垂直背景误差通过气候生成的、平均的特征向量及其对应的特征值进行投影应用
- 水平和垂直背景误差不可分离。每个特征向量具有自己确定的水平气候长度尺度
- 目标函数背景场预条件化通过控制变量变换 U（定义为 B=UUT）实现
- *gen_be*工具用于通过 NMC 方法或集合扰动生成气候背景误差协方差估计
- 提供更新 WRF 边界条件文件的实用程序，用于 WRF-DA 后处理

### 1.1.5 后处理、分析和可视化工具

WRF 支持多种后处理程序，包括基于 NCAR Graphics 的 RIP、NCAR 命令行语言（NCL），以及其他常用图形包（如 GrADS）的数据转换程序。

- **wrf-python** ([wrf-python](https://wrf-python.readthedocs.io/en/latest/)) 是一个专为 WRF 模型输出设计的诊断和插值工具集。
- **NCL** ([NCAR Command Language](http://www.ncl.ucar.edu/)) 是一种免费的解释性语言，专用于科学数据处理和可视化，支持多种文件格式的输入输出，包括 netCDF、HDF4、HDF4-EOS、GRIB、二进制和 ASCII 数据，图形功能高度定制化，效果精美。
- **RIP** ([Read/Interpolate/Plot](https://www2.mmm.ucar.edu/wrf/users/docs/ripug.htm)) 是一个 Fortran 程序，通过调用 NCAR Graphics 例程来可视化从网格化气象数据集获得的输出，主要用于中尺度数值模型。
- **ARWpost** 是一个用于读取 WRF-ARW 模型数据并生成 GrADS 输出文件的工具包。
- **UPP** ([Unified Post Processor](https://ral.ucar.edu/solutions/products/unified-post-processor-upp)) 是美国国家环境预报中心（NCEP）开发的后处理系统，用于其维护的模型，目前由 NSF NCAR 的研究应用实验室（RAL）支持。
- **VAPOR** ([Visualization and Analysis Platform for Ocean, Atmosphere, and Solar Researchers](http://www.vapor.ucar.edu/)) 是由 NSF NCAR 的 VAPOR 团队开发和支持的三维数据可视化工具（vapor at ucar dot edu）。
- **MET** ([Model Evaluation Tools](http://www.dtcenter.org/met/users/)) 是 NSF NCAR 开发测试中心支持的模型评估工具（met_help at ucar dot edu）。

关于这些程序的详细信息（除了 MET）可以在本用户指南中找到。

## 1.2 学习资源

- [WRF 用户网站](https://www2.mmm.ucar.edu/wrf/users/)
- [WRF 教程演示](http://www2.mmm.ucar.edu/wrf/users/tutorial/tutorial.html)
- [WRF-ARW 技术说明](https://www2.mmm.ucar.edu/wrf/users/docs/technote/contents.html)
- [WRF 在线教程](https://www2.mmm.ucar.edu/wrf/OnLineTutorial/index.php)
- [WRF 编译教程](https://www2.mmm.ucar.edu/wrf/OnLineTutorial/compilation_tutorial.php)
- [如何引用 WRF](https://www2.mmm.ucar.edu/wrf/users/citing_wrf.html)
- [WRF 支持论坛](https://forum.mmm.ucar.edu/phpBB3/)
