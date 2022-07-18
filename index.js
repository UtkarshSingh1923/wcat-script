#!/usr/bin/env node

let fs=require('fs') ;
let input=process.argv.slice(2) ;
let action="NA" ;
for(let i=0;i<input.length;i++)
{
   if(input[i]=='-n')
   {
      action="-n" ;
   }
   else if(input[i]=='-b')
   {
      action="-b" ;
   }
   else if(input[i]=='-s')
   {
       action="-s" ;
   }
   else 
   {
      if(action=="NA")
      {
          Display(input[i]) ;
      }
      else if(action=='-s')
      {
          SingleLineBreak(input[i]) ;
      }
      else if(action=="-n")
      {
           Numbering(input[i],0) ;
      }
      else 
      {
           Numbering(input[i],1) ;
      }
   }
}
function Display(path)
{
    if(fs.existsSync(path))
    {
        let checkFile=fs.lstatSync(path).isFile() ;
        if(checkFile)
        {
              let content=fs.readFileSync(path).toString() ;
              console.log(`${content}`);
        }
        else
        {
            console.log("Please enter the path of a file") ;
        }
    } 
    else
    {
        console.log("Please enter a valid path") ;
    }
}
function SingleLineBreak(path)
{
    if(fs.existsSync(path))
    {
        let checkFile=fs.lstatSync(path).isFile() ;
        if(checkFile)
        {
              let content=fs.readFileSync(path).toString() ;
              content=content.split(/\r|\n/) ;
              let newContent="" ;
              for(let i=0;i<content.length;i++)
              {
                  if(content[i]!='')
                    {
                        newContent+=content[i] ;
                        newContent+="\n";
                    }
              }
              fs.writeFileSync(path,newContent) ;
              
        }
        else
        {
            console.log("Please enter the path of a file") ;
        }
    } 
    else
    {
        console.log("Please enter a valid path") ;
    }
}
function Numbering(path,flag)
{
    console.log(path+flag) ;
    if(fs.existsSync(path))
    {
        let checkFile=fs.lstatSync(path).isFile() ;
        if(checkFile)
        {
              let content=fs.readFileSync(path).toString() ;
              content=content.split(/\r|\n/) ;
              let newContent="" ;
              let ctr=1 ;
              for(let i=1;i<=content.length;i++)
              {
                        let temp="" ;
                        
                           if(flag&&content[i]!='')
                            {
                                temp+=ctr+" " ;
                                ctr++ ;
                            }
                            else if(!flag)
                            {
                               temp+=ctr+" " ;
                               ctr++ ;
                            }
                            temp+=content[i] ;
                            temp+="\n" ;
                        newContent+=temp;
                   
              }
              fs.writeFileSync(path,newContent) ;
              
        }
        else
        {
            console.log("Please enter the path of a file") ;
        }
    } 
    else
    {
        console.log("Please enter a valid path") ;
    }
}