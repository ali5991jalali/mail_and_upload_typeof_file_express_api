const multer=require('multer');


//images storage

const img_storage=multer.diskStorage({

destination:function(req,file,cb){

cb(null,'./public/images')


},

filename:function(req,file,cb){

let original_name=file.originalname;
let time=Date.now();
let name=time+original_name;
cb(null,name);


}

})

const img_upload=multer({

    storage:img_storage,
    fileFilter:function(req,file,cb){
let mimetype=file.mimetype;
let pattern=new RegExp(/^image\/(jpg|png|jpeg|gif)$/);
if(pattern.test(mimetype)){

    cb(null,true)

}else{

    cb(null,false)
}

    }
})
//end of image storage



//multer upodaing zip files


const zip_storage=multer.diskStorage({

    destination:function(req,file,cb){
    
    cb(null,'./publid/zip')
    
    
    },
    
    filename:function(req,file,cb){
    
    let original_name=file.originalname;
    let time=Date.now();
    let name=time+original_name;
    cb(null,name);
    
    
    }
    
    })
    
    const zip_upload=multer({
    
        storage:zip_storage,
        fileFilter:function(req,file,cb){
    let mimetype=file.mimetype;
    let pattern=new RegExp(/^application\/(zip)$/);
    if(pattern.test(mimetype)){
    
        cb(null,true)
    }else{
    
        cb('error in saving file in the specific folder')
    }
    
        }
    })
    


//end of uplading zip files


module.exports={

img_upload,

zip_upload

}