import { cruspoFetch,baseURL,routes,header } from './config';
export async function uploadFileandGetLink(file){
    if(!file){
        return null;
    }else{
        var url = await new Promise(async (resolve,reject)=>{
                var response = await cruspoFetch(baseURL.adminBaseURL+routes.getFileUploadLink(file.name),{
                    headers:header,
                    mode:'cors',
                    method:'GET'
                });
                if(response.ok){
                    const uploadURL = (await response.json()).url;
                    var xhr = new XMLHttpRequest();
                    xhr.open('PUT',uploadURL);
                    xhr.upload.onprogress = function(e) {
                        var done = e.position || e.loaded, total = e.totalSize || e.total;
                        console.log(Math.floor(done/total*1000)/10);
                    };
                    xhr.addEventListener('load',async function(){
                        var res = await cruspoFetch(baseURL.adminBaseURL+routes.registerUploadedFile,{
                            headers:header,
                            body:JSON.stringify({
                                fileName:file.name,
                                fileSize:file.size,
                                fileType:file.type,
                                fileUrl:uploadURL.split('?')[0]
                            }),
                            mode:'cors',
                            method:'POST'
                        });
                        if(res.ok){
                            resolve(uploadURL.split('?')[0]);
                            // return ;
                        }else{
                            console.log(res);
                        }
                    });
                    xhr.addEventListener('error',(error)=>{
                        console.log(error);
                        reject(error);
                    })
                    xhr.send(file);
                }else{
                    console.log(response);
                }
            });
            console.log(url);
            return url;
        }
    }
    
