# 工具集

项目用到的工具方法

## 函数

// 检查angular表单是否合法
checkForm(form: Form): boolean

// 判断浏览器是否是ie
isIE(): boolean

// 数字转千分位
toThousands(value: number): string

## 验证器

whitespaceValidator 验证是否输入全空格
ipValidator
mobileValidator
emailValidator

## 管道
fileSize: [decimal]

格式化文件大小为B KB GB TB PB，参数为保留小数位数，默认2位

{{1024|fileSize:2}}  => 1KB

innerhtml

{{html|innerhtml}}

展示接口返回的html结构