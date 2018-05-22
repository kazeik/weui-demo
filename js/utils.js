function checkMobile(sMobile) {
    var re = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;  
    if(re.test(sMobile)){
        return true;
    }
}


function getSmsCode(phone, successCallback,errorCallback){
    $.ajax({
        type: 'post',
        url: 'http://12.0.0.1/code/getsmscode',
        contentType: 'application/json;charset=utf-8',
        dataType: 'text',
        data: {
            phone: phone
        },
        success: successCallback,
        error: errorCallback
    })
}
