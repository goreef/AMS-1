<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/*
  ------------------------------------------------------------------------------
  AMS Applications
  ------------------------------------------------------------------------------

  Author : Dadang Nurjaman
  Email  : mail.nurjaman@gmail.com
  @2014

  ------------------------------------------------------------------------------
  Mabes Polri
  ------------------------------------------------------------------------------
 */
?>

<section class="vbox">
    <header class="header bg-dark lt box-shadow">
        <a href="<?php echo base_url('master/jobtitle/add') ?>" class="btn btn-info btn-sm pull-right"> 
            <i class="glyphicon glyphicon-plus"></i> 
            Tambah Jabatan
        </a> 
        <p class="h4 font-thin m-r m-b-sm">Daftar Jabatan</p>
    </header>
    <section class="scrollable">
        <div class="slim-scroll padder" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railOpacity="0.2">
            <div class="m-b-md"></div>
            <section class="panel panel-default">  		
                <div class="table-responsive">
                    <table class="table table-striped table-hover m-b-none" data-ride="" id="dt_a">
                        <thead>
                            <tr>
                                <th width="10%">Nomor</th>
                                <th width="85%">Nama Jabatan</th>                               
                                <th width="5%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $no = 1;
                            foreach ($data_master as $r) {
                                ?>
                                <tr>                
                                    <td width="10%"><?php echo $no; ?></td> 
                                    <td width="85%"><?php echo $r->job_title_name; ?></td>                                  
                                    <td width="5%">
                                        <div class="btn-group pull-right">
                                            <button class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">Pilihan <span class="caret"></span></button> 
                                            <ul class="dropdown-menu">                                                
                                                <li><a href="<?php echo base_url('master/jobtitle/detail/' . $r->job_title_id); ?>">Lihat</a></li>
                                                <?php if ($this->session->userdata('user_group_level')== '1') { ?>
                                                    <li><a href="<?php echo base_url('master/jobtitle/edit/' . $r->job_title_id); ?>">Ubah</a></li>
                                                    <li><a href="<?php echo base_url('master/jobtitle/delete/' . $r->job_title_id); ?>">Hapus</a></li>
                                                <?php } ?>                                                
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <?php
                                $no++;
                            }
                            ?>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </section>
</section>