<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/*
  ------------------------------------------------------------------------------
  AMS Applications
  ------------------------------------------------------------------------------

  Author : Abdul Gofur
  Email  : abdul.createit@gmail.com
  @2015

  ------------------------------------------------------------------------------
  Mabes Polri
  ------------------------------------------------------------------------------
 */
?>

<section class="vbox">
    <header class="header bg-dark lt box-shadow"> 
		<?php if (in_array('tambahDisposisi', $btn_list)  && empty($result_btn)) { ?>   
        <a href="<?php echo base_url('mail/disposition/add/' . $mail_id) ?>" class="btn btn-info btn-sm pull-right"> 
            <i class="glyphicon glyphicon-plus"></i> 
            Tambah Disposisi
        </a>
		<?php }
			?>
        <p class="h4 font-thin m-r m-b-sm">Daftar Disposisi Surat No :  <?php echo $mail_number; ?></p>
    </header>
    <section class="scrollable">
        <div class="slim-scroll padder" data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railOpacity="0.2">
            <div class="m-b-md"></div>
            <section class="panel panel-default">  		
                <div class="table-responsive">
                    <table class="table table-striped m-b-none" data-ride="" id="dt_a">
                        <thead>
                            <tr>
                                <th width="10%">Nomor</th>
                                <th width="25%">Tujuan Disposisi</th>                                
                                <th width="30%">Disposisi</th>                                                                                                
                                <th width="30%">Perihal</th>
                                <th width="5%"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php
                            $no = 1;
                            foreach ($data_disposition as $r) {
                                ?>
                                <tr>                
                                    <td width="10%"><?php echo $no; ?></td>  
                                    <td width="25%"><strong><?php echo $r->employee_name; ?></strong> <br> <?php echo $r->job_title_name; ?> <br> <?php echo $r->nrp; ?></td>                                                                       
                                    <td width="30%"><?php echo $r->mail_disposition_subject; ?></td>   
                                    <td width="30%"><?php echo $r->mail_subject; ?></td>                                                                                                                                                                                                       
                                    <td width="5%">
                                        <div class="btn-group pull-right">
                                            <button class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">Pilihan <span class="caret"></span></button> 
                                            <ul class="dropdown-menu">                                                
                                                <li><a class="popup-pdf" href="<?php echo base_url('upload/inbox/' . $r->attachment) ?>">Baca Surat</a></li>
                                                <?php if ($r->created_by == $this->session->userdata('employee_id')) {
                                                    ?>
                                                    <li><a href="<?php echo base_url('mail/disposition/edit/' . $r->mail_disposition_id) ?>">Ubah</a></li>
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