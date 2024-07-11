function solution(record) {
    
    let result=[];
   
    let info = new Map();
    for(let i of record){
        let data = i.split(" ");//	[ 'Enter', 'uid1234', 'Muzi' ]
        if(data[0]==='Enter'){
            result.push(`${data[1]}!님이 들어왔습니다.`);
            // if(!info.get(data[1])){//등록되지 않은 유저면 uid:닉네임 으로 등록
            //     info.set(data[1], data[2]);   
            // }
            info.set(data[1], data[2]); 
        }
        if(data[0]==='Leave'){
            result.push(`${data[1]}!님이 나갔습니다.`);
        }
        if(data[0]==='Change'){
            info.set(data[1],data[2]);
        }
    }
    
    for(let i in result){
        //console.log(info.get(i.split('!')[0]),i.split('!')[1]);
        result[i]=info.get(result[i].split('!')[0])+result[i].split('!')[1];
        //console.log(i);
    }
     console.log(result);
    // console.log(info);
    return result;
}