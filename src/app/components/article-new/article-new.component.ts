import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import { Router, ActivatedRoute} from '@angular/router';
import { Global } from '../../services/global';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
	public article : Article;
  public status  : string;

  afuConfig = {
    multiple       : false,
    formatsAllowed : ".jpg,.png,.gif,.jpeg",
    maxSize        : "50",
    uploadAPI      :  {
      url     : Global.url+'upload-mage/'
    },
    theme           : "attachPin",
    hideProgressBar : false,
    hideResetBtn    : false,
    hideSelectBtn   : true,
    fileNameIndex   : true,
    replaceTexts    : {
      selectFileBtn          : 'Select Files',
      resetBtn               : 'Reset',
      uploadBtn              : 'Upload',
      dragNDropBox           : 'Drag N Drop',
      attachPinBtn           : 'Sube la imagen del articulo...',
      afterUploadMsg_success : 'Successfully Uploaded !',
      afterUploadMsg_error   : 'Upload Failed !',
      sizeLimit              : 'Size Limit'
    }
  };

  constructor(
    private _articleService : ArticleService,
    private _router         : Router
  ) {
  	this.article = new Article('','','',null,null);
  }

  ngOnInit(): void {
  }

  onSubmit(){
  	this._articleService.create(this.article).subscribe(
      response => {
        if(response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          this._router.navigate(['/blog']);
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  imageUpload(data){
    let image_data     = JSON.parse(data.response);
    this.article.image = image_data.image;
  }
}
