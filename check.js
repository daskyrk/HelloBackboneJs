/**
 * Created by Jun on 2015/3/13.
 */
javascript: void(function (d) {
    var checks = d.getElementsByName('issue[watcher_user_ids][]');
    for (var i = 0; i < checks.length; i++) {
        checks[i].checked=(checks[i].checked)?false:true;
    }
}(document));


javascript: void(function (d) {
    var not = [26,7,27,47,24,29,48,8,30,46,25];
    var checks = d.getElementsByName('issue[watcher_user_ids][]');
    for (var i = 0; i < checks.length; i++) {
        for(var j =0;j<not.length;j++){
            if(checks[i].value==not[j]){
                checks[i].checked=(checks[i].checked)?false:true;
            }
        }
    }
}(document));

javascript: void(function (d) {
    var not = [26,7,27,47,24,29,48,8,30,46,25];
    var checks = d.getElementsByName('issue[watcher_user_ids][]');
    for (var i = 0; i < checks.length; i++) {
        //for(var j =0;j<not.length;j++){
        //    checks[i].checked=(checks[i].value!=not[j]&&!checks[i].checked)?true:false;
        //}
        not.indexOf(checks[i].value)
        if(not.indexOf(checks[i].value)!=0){
            alert(checks[i].value);
            //checks[i].checked=(checks[i].checked)?false:true;
        }
    }

}(document));