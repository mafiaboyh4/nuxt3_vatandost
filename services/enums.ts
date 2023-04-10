export enum RouteEnum {
    'dashboard' = 'پیشخوان' ,
    'newRequest'='درخواست جدید' ,
    'wallet' = 'حساب',
    'deposit' = 'شارژ',
    'withdraw' = 'برداشت',
    'history' = 'تاریخچه',
    'buyAndSell' = 'خرید و فروش',
    "tradeTools" = 'ابزار تحلیل',
    'crypto' = 'کریپتو',
    'buy' = 'خرید',
    'sell' = 'فروش',
    'digitalCurrency' = 'ارز دیجیتال',
    'forex' = 'فارکس',
    'quizAndAnswer' = 'سوالات متداول'
}

export const DetailTitle = [
    'حساب خود را جهت شارژ انتخاب نمایید.',
    ' مبلغ پرداختی جهت شارژ حساب را وارد نمایید.',
    'جهت ثبت درخواست، صحت اطلاعات را بررسی و تائید نمایید.',
    'اطلاعات ثبت و ارسال شد'
]

const StaticEndTitles = [
    'جهت ثبت درخواست، صحت اطلاعات را بررسی و تائید نمایید.',
    'اطلاعات ثبت و ارسال شد'
]
export const CryptoBuyTitles = [
    'ارز مورد نظر خود را انتخاب کنید.',
    'حساب بانکی خود را برای پرداخت انتخاب نمایید.',
    ' مبلغ مورد نظر جهت خرید ارز را وارد نمایید.',
    ...StaticEndTitles
]

export const CryptoSellTitles = [
    'ارز مورد نظر خود را انتخاب کنید.',
    'حساب خود را جهت واریز انتخاب نمایید.',
    ' مبلغ مورد نظر جهت فروش ارز را وارد نمایید.',
    ...StaticEndTitles
]
export const ForexBuyTitles = [
    'بروکر مورد نظر خود را انتخاب کنید.',
    'حساب بانکی خود را برای پرداخت انتخاب نمایید.',
    ' مبلغ مورد نظر جهت خرید را وارد نمایید.',
    ...StaticEndTitles
]

export const ForexSellTitles = [
    'بروکر مورد نظر خود را انتخاب کنید.',
    'حساب خود را جهت واریز انتخاب نمایید.',
    ' مبلغ مورد نظر جهت فروش  را وارد نمایید.',
    ...StaticEndTitles
]

export enum RequestTypeEnum {
    'crypto' = 'تتر',
    'ریال' = 'ریال' ,
    'webmoney' = 'دلار' ,
    'perfectmoney' = 'پرفکت مانی' ,
    'voucher' = 'وچر پرفکت مانی' ,
    'digitalCurrency' = 'وچر پرفکت مانی' ,
    forex = 'دلار'
}

export enum ToastEnum {
    success = 'success',
    info = 'info',
    warn = 'warn',
    error = 'error'
}


export enum TicketStatusEnum {
    'بسته شده' = 1,
    'در انتظار پاسخ',
    'باز'
}

export enum TicketSideEnum {
    'پشتیبانی فنی' = 1,
    'مالی',
}

export enum TicketStatusClassEnum {
    'bg-gray' = 1,
    'bg-warning',
    'bg-green'
}


export enum UserPermission {
    'برنزی' ,
    'نقره ای',
    'طلایی'
}

export enum AuthStatePath {
    'sendInformation' = 1 ,
    'uploadNationalCart' ,
    'uploadSelfie',
    'waiting' ,
    'result' ,
    'error' 
}


export enum NewsCategories {
    'همه دسته ها',
    'ارز دیجیتال',
    'آموزشی',
    'تکنولوژی',
    'اقتصاد',
    'بین الملل'
}


export enum JibitStatus { 
    'نامعتبر' = 1,
    'پرداخت موفقیت آمیز نبود' ,
    'پرداخت با موفقیت انجام شد' ,
}

export const OtcHistoryType = {
    pending: {
        label:'در حال بررسی',
        color:'yellow'
    },
    error:{
        label:'نا موفق',
        color:'red'
    },
    accepted: {
        label:'موفقیت آمیز',
        color:'green'
    },
    success: {
        label:'موفقیت آمیز',
        color:'green'
    }
}

export const WithdrawHistory = {
    pending: {
        label:'در حال بررسی',
        color:'yellow'
    },
    paied: {
        label:'پرداخت شده',
        color:'yellow'
    },
    error :{
        label:'نا موفق',
        color:'red'
    },
    accepted : {
        label:'موفقیت آمیز',
        color:'green'
    }
}


export enum changeTypeEnum {
    val = '(ریال)',
    per = 'درصد'
}


export enum RequestEnumType {
    'webmoney' = 1,
    'perfect',
    'voucher',
    'forex',
}

export enum TypearzEnumType {
    webmoney  = 'webmoney ', 
    perfectmoney = 'perfectmoney', 
    voucher = 'voucher', 
}

export enum RequestStatusEnum {
    pending = 'در انتظار پرداخت',
    moalagh1 = 'معلق - انتقال نیافته',
    moalagh2 = 'معلق - پرداخت شده',
    backed = 'برگشت داده شده',
    payed = 'پرداخت شده',
    exir = 'واریز از طرف اکسیر',
    cancle = 'لغو شده توسط کاربر',
    networking = 'در انتظار تایید شبکه',
    notFound = 'ثبت نشده',
    error = 'لغو شده از توسط اکسیر',
    success = 'پرداخت شده توسط اکسیر'
}
export enum RequestStatusColorEnum {
    pending = 'yellow',
    moalagh1 = 'yellow',
    moalagh2 = 'green',
    backed = 'green',
    payed = 'green',
    exir = 'green',
    success = 'green',
    cancle = 'red',
    error = 'red',
    networking = 'yellow',
    notFound = ''
}


export enum ArzEnumType {
    'Perfect money'='P',
    'Perfect money vouchers'='V' ,
    'web money'='W',
    voucher = "V",
    perfect = "P",
    otc = "O",
    spot = "S",
    forex = "F",
    wallet = "W",
    referal = "R",
    gateway = "G",
    perfectmoney = "P",
    stake = ""
 }

 export enum ForPayEnum {
    otc = "OTC",
    forex = "حساب فارکس",
    perfect = "حساب پرفکت مانی",
    perfectmoney = "حساب پرفکت مانی",
    voucher = "وچر پرفکت مانی",
    wallet = "کیف پول",
    referal = "سود از زیر مجموعه",
    gateway = "",
    exirpoint = 'تبدیل اکسیر پوینت',
    spot = 'معامله اسپات',
    stake = 'حساب سرمایه گذاری'
 }