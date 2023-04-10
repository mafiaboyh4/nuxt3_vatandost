import moment from 'jalali-moment'
import { Constant } from '~~/core/constant/index';
import { EnumKeys } from '~~/core/enum';

export const Currency = (value: any , isUsdt?:boolean , max?:boolean) => {
    if (Number(value) > 999) {
      if (max) {
        return Intl.NumberFormat().format((value));
      } else {
        const _val = isUsdt ? Number(Math.floor(Number(value)  * 100) / 100) :  Math.trunc(Number(value));
        return Intl.NumberFormat().format((_val));
      }
    } else {
      if (String(value).length >= 3) {
        if (!max) {
          const _val = isUsdt ? Number(Math.floor(Number(value)  * 100) / 100) : Math.trunc(Number(value));
          return eToNumber((_val))
        } else   return eToNumber((value))
      } else return value;
    }
}

const  eToNumber = (num:any) => {
    try {
      
      let sign = "";
      (num += "").charAt(0) == "-" && (num = num.substring(1), sign = "-");
      let arr = num.split(/[e]/ig);
      if (arr.length < 2) return sign + num;
      let dot = (.1).toLocaleString().substring(1, 1), n = arr[0], exp = +arr[1],
          w = (n = n.replace(/^0+/, '')).replace(dot, ''),
        pos = n.split(dot)[1] ? n.indexOf(dot) + exp : w.length + exp,
        L   = pos - w.length, s = "" + BigInt(w);
        w   = exp >= 0 ? (L >= 0 ? s + "0".repeat(L) : r()) : (pos <= 0 ? "0" + dot + "0".repeat(Math.abs(pos)) + s : r());
      L= w.split(dot); if (L[0]==0 && L[1]==0 || (+w==0 && +s==0) ) w = 0; //** added 9/10/2021
      return sign + w;
      function r() {return w.replace(new RegExp(`^(.{${pos}})(.)`), `$1${dot}$2`)}
    } catch (error) {
      return num
    }
  }
 
 export const RouteDetails = () => {
    const pathList = useRoute().fullPath.split('/');
    const cols = pathList.splice(1,pathList.length-1)
    return {
      isBuy:useRoute().fullPath.includes('buy'),
      currencyType:cols[1]
    }
  }


 export const getRequestStep = () => {

    const defaultChose = [
        { label: "انتخاب", icon: "filter-fill" },
    ]
    const defaultStart = [
        { label: "حساب", icon: "wallet" },
        { label: "مبلغ", icon: "dollar" },
        { label: "تایید", icon: "check-square" },
    ]

    const defaultEnd = [
        { label: "پرداخت", icon: "money-bill" },
        { label: "پایان", icon: "flag" }
    ];

    switch (RouteDetails().currencyType) {
        case 'crypto':
        case 'digitalCurrency':
            return [
                ...defaultChose,
                ...defaultStart,
                ...defaultEnd
            ]
        case 'forex':
            return [
                ...[{ label: "انتخاب بروکر", icon: "filter-fill" }],
                ...defaultStart,
                ...defaultEnd
            ]
        default:
            break;
    }
}


export const GRemoveSuffix = (val:string) => {
  if (!val) return val
  if (val == 'USDTUSDC' || val == 'USDT') return 'USDT' 
  if (val == 'USDCUSDT' || val == 'USDC') return 'USDC' 
  return val.replace('USDT' , '').replace('USDC' , '');
}

export const roundNumber = (value) => {
    
  if (Number(value) > 999 && Number(value) < 999999) {
    return `${Math.round(Number(value) / 1000)} K`
  } else if (Number(value) > 999999 && Number(value) < 999999999) {
    return `${Math.round(Number(value) / 1000000)} M`
  } else if (Number(value) > 999999999) {
    return `${Math.round(Number(value) / 1000000000)} T`
  } else {
    return (value)
  }
}

export const ConvertToJalali = (date: string, withTime: boolean = true) => {
  if (date == null || date == '' || !date) {
      return 'ندارد';
  }
  let text = '';
  try {
      let startdate = moment(date);
      text = startdate.format(withTime ? 'HH:mm  jYYYY/jMM/jDD' : 'jYYYY/jMM/jDD');
  } catch (error) {
      text = 'تاریخ نامعتبر';
  }
  return text;
}

export const ConvertToMiladi = (date:string) => {
  if (date == null || date == '' || !date) return '';
  return moment.from(date, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD');
}


export const mobileValid = (phone:string ) => {
  const regex = new RegExp('^(\\+98|0)?9\\d{9}$');
  const result = regex.test(uniqueNumbers(phone));
  return result
} 

export const isValidIranianNationalCode = (input) => {
  const nationalCode = uniqueNumbers(input)
  if (!/^\d{10}$/.test(nationalCode)) return false;
  const check = +nationalCode[9];
  const sum = nationalCode.split('').slice(0, 9).reduce((acc, x, i) => acc + +x * (10 - i), 0) % 11;
  return sum < 2 ? check === sum : check + sum === 11;
}

export const ShabaValidate = (value:string) => {

  if (!/^(?=.{24}$)[0-9]*$/.test(value)) return false
}


export const ValidateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}



export const CartValid = (cartNumber:String) => {
  
  if (cartNumber.length !== 16) return false;
  
  var L = cartNumber.length;
  if (L < 16 || parseInt(cartNumber.substr(1, 10), 10) == 0 || parseInt(cartNumber.substr(10, 6), 10) == 0) return false;
  var c = parseInt(cartNumber.substr(15, 1), 10);
  var s = 0;
  var k, d;
  for (var i = 0; i < 16; i++) {
      k = (i % 2 == 0) ? 2 : 1;
      d = parseInt(cartNumber.substr(i, 1), 10) * k;
      s += (d > 9) ? d - 9 : d;
  }
  
  return ((s % 10) == 0);
}

export const bankType = (cartNumber:String) => {
  const key = cartNumber.substr(0,6);
  const eight = cartNumber.substr(0,8);

  switch (key) {
    case "603799":
      return  "بانک ملی ایران"
    case "589210":
      return  "بانک سپه"
    case "627648":
      return  "بانک توسعه صادرات"
    case "627961":
      return  "بانک صنعت و معدن"
    case "603770":
      return  "بانک کشاورزی"
    case "628023":
      return  "بانک مسکن"
    case "627760":
      return  "پست بانک ایران"
    case "502906":
      return  "بانک توسعه تعاون"
    case "627412":
      return  "بانک اقتصاد نوین"
    case "622106":
      return  "بانک پارسیان"
    case "502229":
      return  "بانک پاسارگاد"
    case "639599":
      return  "بانک قوامین"
    case "627488":
      return  "بانک کارآفرین"
    case "621986":
      if (eight == '62198619') return "بلوبانک"
      else return "بانک سامان"
    case "639346":
      return  "بانک سینا"
    case "639607":
      return  "بانک سرمایه"
    case "502806":
      return  "بانک شهر"
    case "502938":
      return  "بانک دی"
    case "603769":
      return  "بانک صادرات"
    case "610433":
      return  "بانک ملت"
    case "585983":
      return  "بانک تجارت"
    case "589463":
      return "بانک رفاه	"
    case "627381":
      return  "بانک انصار"
    case "639370":
      return  "بانک مهر اقتصاد"
    case "507677":
      return  "موسسه اعتباری نور"
    case "628157":
      return  "موسسه اعتباری توسعه"
    case "505801":
      return  "موسسه اعتباری کوثر"
    case "606256":
      return  "موسسه اعتباری ملل (عسکریه)"
    case "606373":
      return  "بانک قرض الحسنه مهرایرانیان"
  }
}

export const checkShaba = (str:String) => {
  const s = Number(str)
  const shaba = 'IR'+String(s);
  console.log(str.length);
  
  if (str.length !== 26) {
    return false;
  }

  return true;
}

const iso7064Mod97_10 = (iban) => {
  var remainder = iban,
      block;

  while (remainder.length > 2){
    block = remainder.slice(0, 9);
    remainder = parseInt(block, 10) % 97 + remainder.slice(block.length);
  }

  return parseInt(remainder, 10) % 97;
}


export function convertFileTOBase64(inputValue: any, callBackResult): void {

  var reader = new FileReader()
  reader.readAsDataURL(inputValue)
  reader.onload = () => {
      callBackResult(reader.result);
  };
}

const inputNumberController = (str:string) => {
  const value = str.replaceAll(',' , '');
  const pattern = /1|2|3|4|5|6|78|9|0/;
  
  if (!pattern.test( value[value.length-1])) {
      return Intl.NumberFormat().format(Number(value.substring(0 , value.length-1)));
  } else {
      return Intl.NumberFormat().format(Number(value))
  }
}

export const formatCardNumber = value => {
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')

    return onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
        [$1, $2, $3, $4].reverse().filter(group => !!group).join(' ')
    )
}

export const PasswordRegexController = (str:string) => Boolean(/^[A-Za-z0-9-$&+,:;=?@#|'<>.^*()%!-]*$/.test(str));
export const StrongPassword = (str:string) => Boolean(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(str));
export const JustEnglish = (str:string) => Boolean(/^[A-Za-z]*$/.test(str));
export const JustInt = (str:string) => Boolean(/^[0-9]*$/.test(str));


export function uniqueNumbers(str: string) {
  return str.replace(/[\u0660-\u0669\u06f0-\u06f9]/g,function(a){return a.charCodeAt(0)&15})
}

export const GetImageByToken = async (url:string): Promise<string> =>  {
  return new Promise((resolve) => {
      const headers = new Headers();
      headers.set(EnumKeys.KeyToken , String(localStorage.getItem(EnumKeys.KeyToken)));
      const reqUrl = Constant.BASE_URL + url;
      const req = fetch(reqUrl , { headers });
      req.then((res)=> res.blob())
      .then(imageBlob => {
          resolve(URL.createObjectURL(imageBlob));
      });
  });
}


export const WalletValidation = (symbol:string , address:string , network:string) => {
  return true
}

export const GoToGetaway = (url:string , newTab = false) => {
  if (newTab) {
      Object.assign(document.createElement('a'), {
        target: '_blank',
        href: url,
    }).click();
  } else window.location.href = url
}



export const RoundStakeDays = (day:number) => {

  if (day < 7) {
    return `${day} روز`
  } else if (day == 7) {
    return 'یک هفته'
  } else if (day == 14) {
    return 'دو هفته'
  } else if (day == 21) {
    return 'سه هفته'
  } else if (day == 28) {
    return 'چهار هفته'
  } else if (day == 30) {
    return 'یک ماه'
  } else if (day == 60) {
    return 'دو ماه'
  } else if (day == 90) {
    return 'سه ماه'
  } else if (day == 102) {
    return 'شش ماه'
  } else if (day == 365) {
    return 'یک سال'
  }
  
} 