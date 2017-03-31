import React, { Component } from 'react';

export default class AddArticle extends Component {
	componentDidMount(){
    tinymce.remove();
    tinymce.init({
      selector: 'textarea',
      resize: 'true',
      skin_url: '/packages/teamon_tinymce/skins/lightgray',
      toolbar:'image styleselect codesample forecolor backcolor ltr rtl fullscreen insertdatetime media pagebreak searchreplace table visualblocks code',
      plugins: "autosave advlist autolink link image imagetools lists charmap print preview wordcount codesample textcolor colorpicker contextmenu directionality fullscreen hr insertdatetime legacyoutput media pagebreak searchreplace table visualblocks code",
      contextmenu: "link image inserttable | cell row column deletetable",
      media_live_embeds: true,
      pagebreak_split_block: true,
      visualblocks_default_state: true,
      browser_spellcheck: true,
      imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions",
      audio_template_callback: function(data) {
        return '<audio controls>' + '\n<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + '</audio>';
      },
      video_template_callback: function(data) {
        return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' + '<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + (data.source2 ? '<source src="' + data.source2 + '"' + (data.source2mime ? ' type="' + data.source2mime + '"' : '') + ' />\n' : '') + '</video>';
      },
      /*setup: function(editor) {
        // console.log("====>>", editor)
        editor.on('init', function (e) {
          console.log('Editor was initialized.');
        });
      }*/
    });
  }
  submitData(event){
    event.preventDefault();
    let obj ={
      title: this.refs.title.value,
      article: tinyMCE.get((this.refs.article).id).getContent().trim()
    }
    Meteor.call('addArticle', obj, (err, res)=>{
      if(err){
        alert(err.reason)
      }else if(res){
        alert("Article added")
        this.refs.title.value = "";
        tinyMCE.get((this.refs.article).id).setContent('');
        FlowRouter.go('home');
      }else if(res == ""){
      	alert("Error while insert article");
      }
    })
  }
	render(){
		return(
			<div className="container">
				<form className = "form-horizontal" role = "form" onSubmit={this.submitData.bind(this)}>
					<div className="form-group">
						<label htmlFor="title">Title</label>
						<input type="text" ref="title" className="form-control" id="title" required />
					</div>
					<div className="form-group">
						<label htmlFor="article">Article</label>
						<textarea ref="article" name="article" id="article" />
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-primary">Submit</button>
						<button type="button" className="btn btn-default" onClick={()=>FlowRouter.go('home')}>Cancel</button>
					</div>
				</form>
			</div>
		);
	}
}