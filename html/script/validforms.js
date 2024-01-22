/***************************************************
	제작 : 최영규 (hooriza.spam@gmail.com)
           http://hooriza.com/

		   소스 무단 수정 또는 재배포 일단 금지
***************************************************/

// PUBLIC

function initValidForms(FORM)
{
	FORM.onsubmit = function() { return checkForm(FORM); }
}

// PRIVATE

function getStrBreakedByComma(str)
{
	var i, rtn_str;

	if (str == "") return "";

	rtn_str = "";

	for (i = 0; i < str.length; i++)
	{
		rtn_str += str.substr(i, 1);
		if (i != str.length - 1) rtn_str += ", ";
	}

	return rtn_str;
}

function setFocus(OBJ) // 객체에 포커스 주기
{
	if (getProperty(OBJ, "errordel") != null) // errorsel 이면...
		OBJ.value = "";

	if (getProperty(OBJ, "errorsel") != null) // errorsel 이면...
		OBJ.select();

	OBJ.focus();

	return true;
}

function errorMsg(OBJ, msg)
{
	if (getProperty(OBJ, "errormsg") != null) msg = getProperty(OBJ, "errormsg");
	alert(msg);

	return false;
}

function numericOnly(OBJ)
{
	if (isNumber(OBJ.value))
		return checkMinMax(OBJ);
	
	return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은")+" 숫자만 입력할 수 있습니다");
}

function integerOnly(OBJ)
{
	if (isInteger(OBJ.value))
		return checkMinMax(OBJ);

	return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은")+" 정수만 입력할 수 있습니다");
}

// text 형식 입력상자에 onlyemail 속성이 있는 경우
// 올바른 이메일인지 검사
function emailOnly(OBJ)
{
	var	exp = new RegExp ("^[A-Za-z0-9-_\\.]{2,}@[A-Za-z0-9-_\\.]{2,}\\.[A-Za-z0-9-_]{2,}$");

	// 한글이 포함돼 있거나 이메일 형식이 아닌 경우
	if (stringLength(OBJ.value) == OBJ.value.length && exp.test(OBJ.value))
		return true;

	return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " 올바른 이메일 주소가 아닙니다");
}

// 이 함수는 거친마루님의 lib.validate.js 의 isValidJumin 함수를 베낌
function socialidOnly(OBJ)
{
    var pattern = /^([0-9]{6})-?([0-9]{7})$/; 
	var num = OBJ.value;
    if (!pattern.test(num))
		return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " 올바른 주민등록번호가 아닙니다");

    num = RegExp.$1 + RegExp.$2;

	var sum = 0;
	var last = num.charCodeAt(12) - 0x30;
	var bases = "234567892345";

	for (var i=0; i<12; i++)
	{
		if (isNaN(num.substring(i,i+1)))
			return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " 올바른 주민등록번호가 아닙니다");

		sum += (num.charCodeAt(i) - 0x30) * (bases.charCodeAt(i) - 0x30);
	}

	var mod = sum % 11;
	if ((11 - mod) % 10 != last)
		return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " 올바른 주민등록번호가 아닙니다");

	return true;
}

// 이 함수는 거친마루님의 lib.validate.js 의 isValidBizNo 함수를 베낌
function bizidOnly(OBJ)
{
    var pattern = /([0-9]{3})-?([0-9]{2})-?([0-9]{5})/; 
	var num = OBJ.value;
    if (!pattern.test(num))
		return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " 올바른 사업자등록번호가 아닙니다");

	num = RegExp.$1 + RegExp.$2 + RegExp.$3;

	var cVal = 0; 

	for (var i=0; i<8; i++)
	{ 
        var cKeyNum = parseInt(((_tmp = i % 3) == 0) ? 1 : ( _tmp  == 1 ) ? 3 : 7); 
        cVal += (parseFloat(num.substring(i,i+1)) * cKeyNum) % 10; 
    } 

	var li_temp = parseFloat(num.substring(i,i+1)) * 5 + '0'; 
    cVal += parseFloat(li_temp.substring(0,1)) + parseFloat(li_temp.substring(1,2)); 

	if (parseInt(num.substring(9,10)) != 10-(cVal % 10)%10)
		return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " 올바른 사업자등록번호가 아닙니다");

	return true;
}

function urlOnly(OBJ)
{
	var	exp = new RegExp ("^(mms|MMS|http|HTTP|ftp|FTP|telnet|TELNET)\:\/\/");

	if (exp.test(OBJ.value))
		return true;

	return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " 올바른 URL 주소가 아닙니다");
}

// 한글만 있는지 검사
function koreanOnly(OBJ)
{
	var pattern = /^[ㄱ-힣]+$/;

	if (pattern.test(OBJ.value))
		return true;

	return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " " + "한글만 입력할 수 있습니다");
}

// 한글이 문자가 있는지 검사
function notkoreanOnly(OBJ)
{
	var pattern = /[ㄱ-힣]/;

	if (!pattern.test(OBJ.value))
		return true;

	return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " " + "한글은 입력받을 수 없습니다");
}

function englishOnly(OBJ)
{
	var pattern = /^[a-zA-Z]+$/;

	if (pattern.test(OBJ.value))
		return true;

	return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " " + "영문자만 입력할 수 있습니다");
}

function notenglishOnly(OBJ)
{
	var pattern = /[a-zA-Z]/;

	if (!pattern.test(OBJ.value))
		return true;

	return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " " + "영문자는 입력받을 수 없습니다");
}

function emOnly(OBJ)
{
	if (stringLength(OBJ.value) != OBJ.value.length * 2) // 전각문자만으로만 되어 있는지 검사
		return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " " + "전각문자만 입력받을 수 있습니다");

	return true;
}

function halfemOnly(OBJ)
{
	if (stringLength(OBJ.value) != OBJ.value.length) // 전각문자가 포함되어 있는지 검사
		return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은") + " " + "반각문자만 입력받을 수 있습니다");

	return true;
}

// text, password, textarea, file 형식 입력상자에 notnull 속성이 있는 경우
// 값이 비어있는지 검사
// 빈값이 없을 경우 true, 빈값이 있을 경우 false 를 리턴
// notnull
function checkNotNull(OBJ)
{
	// alert(getProperty(OBJ, "notnull"));

	if (getProperty(OBJ, "notnull") == null)
		return true;

	if (isEmpty(OBJ.value))
		return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "을") + " 입력하세요");

	return true;
}

// text, password, textarea, file 형식 입력상자의 최소길이 및 최대길이 검사
// 최소길이 및 최대길이 테스트 통과시 true, 실패시 false 를 리턴
// textarea 인 경우 maxLength 로 해 주어야 적용됨
// maxlength, minlength
function checkLength(OBJ)
{
	if (OBJ.value == "") return true;

	var str_len, errorname;

	if (getProperty(OBJ, "minlength") == null && getProperty(OBJ, "maxlength") == null) return true;

	if (getProperty(OBJ, "type").toUpperCase() == "FILE")
	{
		var	rslash_pos, fname;

		rslash_pos = OBJ.value.lastIndexOf("\\", OBJ.value.length);

		// 맥 호환을 위한 수정
		if (rslash_pos == -1 )
		{
			str_len = stringLength(OBJ.value);
		}
		else
		{
			fname = OBJ.value.substr(rslash_pos + 1);
			str_len = stringLength(fname);
		}

		errorname = getProperty(OBJ, "errorname") + " 파일이름";
	}
	else
	{
		str_len = stringLength(OBJ.value);
		errorname = getProperty(OBJ, "errorname");
	}

	// 최소 길이 검사
	if (getProperty(OBJ, "minlength") != null)
	{
		if (str_len < getProperty(OBJ, "minlength"))
		{
			return errorMsg(OBJ, addPost(errorname, "은") + " 영문 "
			 + getProperty(OBJ, "minlength") + "자, 한글 "
			 + Math.ceil(getProperty(OBJ, "minlength") / 2)
			 + "자 이상 입력해야 합니다");
		}
	}

	// 최대 길이 검사
	if (getProperty(OBJ, "maxlength") != null)
	{
		if (str_len > getProperty(OBJ, "maxlength"))
		{
			return errorMsg(OBJ, addPost(errorname, "은") + " 영문 "
			 + getProperty(OBJ, "maxlength") + "자, 한글 "
			 + parseInt(getProperty(OBJ, "maxlength") / 2)
			 + "자 까지 입력할 수 있습니다");
		}
	}

	return true;
}

// text, password, textarea 형식의 값이
// 숫자(숫자, 정수, 양수, 음수)인지 검사
// 최소값, 최대값 검사
function checkMinMax(OBJ)
{
	if (OBJ.value == "") return true;

	if (getProperty(OBJ, "maxnum") == null && getProperty(OBJ, "minnum") == null) return true;

	// 최대값 검사
	if (getProperty(OBJ, "maxnum") != null)
	{
		if (parseFloat(OBJ.value) > parseFloat(getProperty(OBJ, "maxnum")))
			return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은")+" "+getProperty(OBJ, "maxnum")+" 이하의 숫자를 입력해야 합니다");
	}

	// 최소값 검사
	if (getProperty(OBJ, "minnum") != null)
	{
		if (parseFloat(OBJ.value) < parseFloat(getProperty(OBJ, "minnum")))
			return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은")+" "+getProperty(OBJ, "minnum")+" 이상의 숫자를 입력해야 합니다");
	}

	return true;
}

function checkOnlyChar(OBJ)
{
	if (OBJ.value == "") return true;

	if (getProperty(OBJ, "onlychar") == null) return true;

	var onlychars = getProperty(OBJ, "onlychar");

	for (var i = 0; i < OBJ.value.length; i++)
	{
		if (onlychars.indexOf(OBJ.value.substr(i, 1)) == -1)
			return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은")+" "+"다음의 문자("+getStrBreakedByComma(getProperty(OBJ, "onlychar"))+") 만 쓸 수 있습니다");
	}

	return true;
}

function checkDenyChar(OBJ)
{
	if (OBJ.value == "") return true;

	if (getProperty(OBJ, "denychar") == null) return true;

	var denychars = getProperty(OBJ, "denychar");

	for (i = 0; i < denychars.length; i++)
	{
		if (OBJ.value.indexOf(denychars.substr(i, 1)) != -1)
			return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "은")+" "+"다음의 문자("+getStrBreakedByComma(getProperty(OBJ, "denychar"))+") 를 쓸 수 없습니다");
	}

	return true;
}

function checkEqGroup(OBJ)
{
	if (OBJ.value == "") return true;

	if (getProperty(OBJ, "eqgroup") == null) return true;

	var otherobj;

	for (var i = 0; i < OBJ.form.length; i++)
	{
		otherobj = OBJ.form.elements[i];

		if (getProperty(otherobj, "eqgroup") == getProperty(OBJ, "eqgroup")) // eqgroup 은 같은데...
		{
			if (otherobj.value != OBJ.value) // 값이 다르면
				return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "과") + " " + addPost(getProperty(otherobj, "errorname"), "이") + " 서로 일치하지 않습니다");
		}
	}

	return true;
}

function checkRegExp(OBJ)
{
	if (OBJ.value == "") return true;

	if (getProperty(OBJ, "regexp") == null) return true;

	var	exp = new RegExp(getProperty(OBJ, "regexp"));

	if (exp.test(OBJ.value))
		return true;

	return errorMsg(OBJ, addPost(getProperty(OBJ, "errorname"), "이") + " 지정한 정규표현식과 일치하지 않습니다");
}

function checkObject(OBJ)
{
	var onlyWhat = getProperty(OBJ, "only");
	var onlyExist;
	var onlyResult = true;

	if (onlyWhat && OBJ.value != "")
	{
		var lowerOnlyWhat = onlyWhat.toLowerCase();

		eval("onlyExist = typeof("+lowerOnlyWhat+"Only);");

		if (onlyExist != "function")
			alert("컨트롤의 only 속성이 적당하지 않은 값("+lowerOnlyWhat+")으로 설정되어 있습니다");
		else
			eval("onlyResult = "+lowerOnlyWhat+"Only(OBJ);");

		if (!onlyResult)
		{
			setFocus(OBJ);
			return false;
		}
	}

	if (checkNotNull(OBJ) && checkLength(OBJ) && checkMinMax(OBJ) && checkOnlyChar(OBJ) && checkDenyChar(OBJ) && checkEqGroup(OBJ) && checkRegExp(OBJ))
		return true;

	setFocus(OBJ);
	return false;
}

function checkForm(FORM)
{
	var OBJ, i;

	for (i = 0; i < FORM.length; i++)
	{
		OBJ = FORM.elements[i];
		if (!checkObject(OBJ)) return false;
	}

	return true;
}

// HANDLER

addInitialer(initValidForms, "FORM");
// addHandler(moveUploads, "ONMOUSEMOVE");