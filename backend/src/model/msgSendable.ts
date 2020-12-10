export class msgSendable{
    protected valid:(()=>boolean)[]=[];
    msgVect:string[]= []
    isValid(){
        return this.valid.reduce((s,t,i)=>{
            if(i==0) return true;
            return t()&&s
        },true);
    }
    validVect(){
        return this.valid.map((s,i)=>s()?'':this.msgVect[i]);
    }
}