const ConfigStore=require("configstore");
const pkg=require("../package.json");
const conf=new ConfigStore(pkg.name)
conf.set('apiKey','ece8fbb598a37abb5feb9f56cb1e621b');
class KeyManager{
        constructor(){
            this.conf=new ConfigStore(pkg.name);
        }

        setKey(key){
            this.conf.set('apiKey',key);
            return key;
        }

        getKey(){
            const key=this.conf.get('apiKey');
            if(!key){
                throw new Error("No Api key Found - Get a key at https://nomics.com")
            }
            return key;
        }
        deleteKey(){
            const key=this.conf.get('apiKey');
            if(!key){
                throw new Error("No Api key Found - Get a key at https://nomics.com")
            }
            this.conf.delete("apiKey");
            return;
        }
       
}
module.exports=KeyManager;