<template><div><h1 id="_2-编译指南" tabindex="-1"><a class="header-anchor" href="#_2-编译指南"><span>2 编译指南</span></a></h1>
<p>WRF建模系统包含WRF预处理系统（WPS）、WRF模型、WRFDA、WRF-Chem、WRF-hydro及若干实用工具。WPS源码独立于其他WRF组件，因此在处理真实数据的模拟时需单独编译。WRF模型包含用于Fortran接口的ESMF源码以及FFT库。</p>
<p>WRF模型已成功移植到多种Unix系统上。由于开发者无法掌握所有系统的配置细节，编译器和加载选项的配置信息主要依赖外部用户和供应商的支持。以下列出了WRF建模系统支持的硬件和软件组合：</p>
<table>
<thead>
<tr>
<th>供应商</th>
<th>硬件</th>
<th>操作系统</th>
<th>编译器</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cray</td>
<td>XC30 Intel</td>
<td>Linux</td>
<td>Intel</td>
</tr>
<tr>
<td>Cray</td>
<td>XE AMD</td>
<td>Linux</td>
<td>Intel</td>
</tr>
<tr>
<td>IBM</td>
<td>Power Series</td>
<td>AIX</td>
<td>vendor</td>
</tr>
<tr>
<td>IBM</td>
<td>Intel</td>
<td>Linux</td>
<td>Intel/PGI/gfortran</td>
</tr>
<tr>
<td>SGI</td>
<td>IA64/Opteron</td>
<td>Linux</td>
<td>Intel</td>
</tr>
<tr>
<td>COTS*</td>
<td>IA32</td>
<td>Linux</td>
<td>Intel/PGI/gfortran/g95/PathScale</td>
</tr>
<tr>
<td>COTS</td>
<td>IA64/Opteron</td>
<td>Linux</td>
<td>Intel/PGI/gfortran/PathScale</td>
</tr>
<tr>
<td>Mac</td>
<td>Power Series</td>
<td>Darwin</td>
<td>xlf/g95/PGI/Intel</td>
</tr>
<tr>
<td>Mac</td>
<td>Intel</td>
<td>Darwin</td>
<td>gfortran/PGI/Intel</td>
</tr>
<tr>
<td>NEC</td>
<td>NEC</td>
<td>Linux</td>
<td>vendor</td>
</tr>
<tr>
<td>Fujitsu</td>
<td>FX10 Intel</td>
<td>Linux</td>
<td>vendor</td>
</tr>
</tbody>
</table>
<p>WRF模型可在单处理器、共享内存机器（使用OpenMP API）、分布式内存机器（使用MPI库）或分布式集群（同时使用OpenMP和MPI）上运行。</p>
<p>有关WRF构建机制控制软件的详细信息，请参阅用户指南中的<a href="https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/wrf_software.html" target="_blank" rel="noopener noreferrer">WRF软件章节</a>。</p>
<h3 id="所需编译器和脚本语言" tabindex="-1"><a class="header-anchor" href="#所需编译器和脚本语言"><span>所需编译器和脚本语言</span></a></h3>
<p>WRF建模系统代码主要用标准Fortran 90编写（并包含少量2003特性）。WRF与WRFDA之间的通信层RSL及MPI接口用C语言编写。由于这些组成部分，构建WRF代码需要安装gfortran编译器、gcc和cpp。建议使用支持Fortran 2003标准（4.6+版本）的Fortran编译器。构建机制使用了多个脚本语言，包括perl、Cshell和Bourne shell。以下UNIX文本/文件处理工具是构建过程中必须的：</p>
<table>
<thead>
<tr>
<th>ar</th>
<th>head</th>
<th>sed</th>
</tr>
</thead>
<tbody>
<tr>
<td>awk</td>
<td>hostname</td>
<td>sleep</td>
</tr>
<tr>
<td>cat</td>
<td>ln</td>
<td>sort</td>
</tr>
<tr>
<td>cd</td>
<td>ls</td>
<td>tar</td>
</tr>
<tr>
<td>cp</td>
<td>make</td>
<td>touch</td>
</tr>
<tr>
<td>cut</td>
<td>mkdir</td>
<td>tr</td>
</tr>
<tr>
<td>expr</td>
<td>mv</td>
<td>uname</td>
</tr>
<tr>
<td>file</td>
<td>nm</td>
<td>wc</td>
</tr>
<tr>
<td>grep</td>
<td>printf</td>
<td>which</td>
</tr>
<tr>
<td>gzip</td>
<td>rm</td>
<td>m4</td>
</tr>
</tbody>
</table>
<h3 id="必需和可选库" tabindex="-1"><a class="header-anchor" href="#必需和可选库"><span>必需和可选库</span></a></h3>
<blockquote>
<p>注意：如果以下库未能正确编译，请联系您所在机构的系统管理员或库支持团队。WRF开发者和支持团队无法提供个别系统上的库支持！</p>
</blockquote>
<p>点击以下链接可访问相关小节：</p>
<blockquote>
<ul>
<li><a href="https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/compiling.html#netcdf" target="_blank" rel="noopener noreferrer">NetCDF</a></li>
<li><a href="https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/compiling.html#mpi" target="_blank" rel="noopener noreferrer">MPI</a></li>
<li><a href="https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/compiling.html#grib2-libraries" target="_blank" rel="noopener noreferrer">GRIB2 库</a></li>
<li><a href="https://www2.mmm.ucar.edu/wrf/users/wrf_users_guide/build/html/compiling.html#grib1-output-format" target="_blank" rel="noopener noreferrer">GRIB1 输出格式</a></li>
</ul>
</blockquote>
<h4 id="netcdf" tabindex="-1"><a class="header-anchor" href="#netcdf"><span>NetCDF</span></a></h4>
<p>netCDF包（3.6.1+版本）是构建WRF系统的唯一强制库。netCDF源码、预编译二进制文件和文档可从<a href="https://www.unidata.ucar.edu/software/netcdf/" target="_blank" rel="noopener noreferrer">Unidata</a>网站获取。使用压缩功能需要netCDF 4.0或更高版本，并需启用HDF5支持。</p>
<blockquote>
<ul>
<li><a href="http://www2.mmm.ucar.edu/wrf/OnLineTutorial/compilation_tutorial.php" target="_blank" rel="noopener noreferrer">WRF编译指南</a>包含详细的编译步骤。</li>
<li>在Linux或Darwin系统上编译WRF系统组件时，确保使用正确的外部库链接，不要混用不同编译器生成的库。</li>
<li>使用netCDF-4时，确保其安装未激活基于HDF5的并行I/O功能。WRF系统可使用netCDF-3的经典数据模型或netCDF-4支持的压缩选项。V4.4版起支持并行写入压缩的netCDF-4文件，尽管性能比pnetcdf慢，但在并行文件系统上可能比常规netCDF更快。</li>
</ul>
</blockquote>
<p>安装netCDF后，应设置环境变量<strong>PATH</strong>和<strong>NETCDF</strong>，以便编译时模型找到所需库文件。例如：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">> setenv PATH /usr/local/netcdf/bin:$PATH</span>
<span class="line">> setenv NETCDF /usr/local/netcdf</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mpi" tabindex="-1"><a class="header-anchor" href="#mpi"><span>MPI</span></a></h4>
<p>运行分布式内存的WRF任务需要MPI库（例如<a href="https://www.mpich.org/" target="_blank" rel="noopener noreferrer">MPICH</a>或OpenMPI）。大多数多处理器机器已预装MPI库，用户通常不需自行安装。若出现问题，可参考<a href="http://www2.mmm.ucar.edu/wrf/OnLineTutorial/compilation_tutorial.php" target="_blank" rel="noopener noreferrer">WRF编译指南</a>。在构建分布式内存的WRF时，要求有有效的MPI安装，MPI-1或MPI-2皆可。</p>
<p>可通过以下命令检查MPI库：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">> which mpif90</span>
<span class="line">> which mpicc</span>
<span class="line">> which mpirun</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确保路径指向MPI的“lib”、“include”和“bin”目录。MPI的构建应与WRF源码保持一致。</p>
<h4 id="grib2库" tabindex="-1"><a class="header-anchor" href="#grib2库"><span>GRIB2库</span></a></h4>
<ul>
<li>如果计划使用GRIB Edition 2格式的真实数据输入（常见需求），WPS的ungrib程序需要以下库，需在配置WPS前安装：zlib、libpng、jasper。</li>
</ul>
<p>从WPS 4.4版起，可使用内部GRIB2库，通过命令行选项<code v-pre>--build-grib2-libs</code>构建内部的zlib、libpng和JasPer库。</p>
<p><strong>使用内部GRIB2库</strong></p>
<p>使用<code v-pre>--build-grib2-libs</code>选项时，配置脚本将构建内部的zlib、libpng和JasPer库，并安装在<em>WPS/grib2</em>目录中。</p>
</div></template>


