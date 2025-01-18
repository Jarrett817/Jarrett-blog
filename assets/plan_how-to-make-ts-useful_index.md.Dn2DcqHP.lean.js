import{_ as i,a as d,b as B}from"./chunks/Zod.vue_vue_type_script_setup_true_lang.Cu3DpBfs.js";/* empty css                                                                       */import{a2 as u,G as g,a5 as a,ao as p,H as s,c as l,E as A}from"./chunks/framework.C1rSk1pR.js";import"./chunks/theme.DXZAdxYV.js";const D=p("",5),b=s("h3",{id:"条件类型",tabindex:"-1"},[l("条件类型 "),s("a",{class:"header-anchor",href:"#条件类型","aria-label":'Permalink to "条件类型"'},"​")],-1),h=s("p",null,"extends 既可以用于继承，也可用于类型约束",-1),m=s("h3",{id:"namespace",tabindex:"-1"},[l("namespace "),s("a",{class:"header-anchor",href:"#namespace","aria-label":'Permalink to "namespace"'},"​")],-1),f=s("p",null,"用于防止类型重命名冲突，比如微信小程序提供了全局类型的 namespace",-1),C=s("h3",{id:"泛型",tabindex:"-1"},[l("泛型 "),s("a",{class:"header-anchor",href:"#泛型","aria-label":'Permalink to "泛型"'},"​")],-1),S=s("p",null,"合理使用泛型是 ts 的精髓，能够更好的封装通用方法",-1),x=s("p",null,"学会泛型能够轻松阅读各类社区库的类型声明，良好的变量命名、类型声明很多时候可以替代文档",-1),T=s("h3",{id:"枚举-常量枚举",tabindex:"-1"},[l("枚举 & 常量枚举 "),s("a",{class:"header-anchor",href:"#枚举-常量枚举","aria-label":'Permalink to "枚举 & 常量枚举"'},"​")],-1),_=s("p",null,[l("业务代码中常有关于枚举的判断，比如"),s("code",null,"data.status===1"),l("，这可能分散在各个项目文件，并且缺失语义")],-1),v=s("div",{class:"danger custom-block"},[s("p",{class:"custom-block-title"},"建议"),s("p",null,"如果不想在业务变动时一处处地逐个修改枚举判断，建议所有使用常量或枚举而不是硬编码")],-1),w=p("",35),E=p("",7),P=p("",1),z=JSON.parse('{"title":"10 分钟速通 TS","description":"","frontmatter":{},"headers":[],"relativePath":"plan/how-to-make-ts-useful/index.md","filePath":"plan/how-to-make-ts-useful/index.md","lastUpdated":1737179313000}'),k={name:"plan/how-to-make-ts-useful/index.md"},L=Object.assign(k,{setup(I){const o=`
type MyType<T> = T extends string ? T : '1';
const a: MyType<string> = 'test';
const b: MyType<number> = 1
`,e=`
declare namespace MySpace {
  interface UserType {}
}

const user: MySpace.UserType = {};


declare namespace WechatMiniprogram {
    type IAnyObject = Record<string, any>
    interface Target<DataSet extends IAnyObject = IAnyObject> {
        /** 事件组件的 id */
        id: string
        /** 当前组件的类型 */
        tagName?: string
        /** 事件组件上由 'data-' 开头的自定义属性组成的集合 */
        dataset: DataSet
        /** 距离页面顶部的偏移量 */
        offsetTop: number
        /** 距离页面左边的偏移量 */
        offsetLeft: number
    }

    /** 基础事件参数 */
    interface BaseEvent<
        Mark extends IAnyObject = IAnyObject,
        CurrentTargetDataset extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = CurrentTargetDataset
    > {
        /** 事件类型 */
        type: string
        /** 页面打开到触发事件所经过的毫秒数 */
        timeStamp: number
        /** 事件冒泡路径上所有由 'mark:' 开头的自定义属性组成的集合 */
        mark?: Mark
        /** 触发事件的源组件 */
        target: Target<TargetDataset>
        /** 事件绑定的当前组件 */
        currentTarget: Target<CurrentTargetDataset>
    }

       /** 自定义事件 */
    interface CustomEvent<
        Detail extends IAnyObject = IAnyObject,
        Mark extends IAnyObject = IAnyObject,
        CurrentTargetDataset extends IAnyObject = IAnyObject,
        TargetDataset extends IAnyObject = CurrentTargetDataset
    > extends BaseEvent<Mark, CurrentTargetDataset, TargetDataset> {
        /** 额外的信息 */
        detail: Detail
    }
}


function handleTap(e:WechatMiniprogram.CustomEvent<{name:string}>){
  console.log(e.detail.name);
}
`,t=`
// 使用泛型声明对象
interface Student<Sex = string, Info = string> {
  name: string;
  age: number;
  sex: Sex;
  info: Info extends string ? Info : {
    address: string;
    phone: number;
  }
}

// 默认导出也可使用泛型约束类型
export default <Student>{
  name: '谷雨',
  age: 18,
  sex: 'male'
}

const student: Student<'female', []> = {
  name: '谷雨',
  age: 18,
  sex: 'male'
}

// 你可能会这样声明函数
const add = (a: number, b: number) => a + b;

// 更好的方式
type Add<T> = (a: T, b: T) => T;

// T可代表任何类型
const addN: Add<number> = (a, b) => a + b;
const addS: Add<string> = (a, b) => a + b;

addN(1, '2');
addS(2, 3);

function getDetail<T extends object>(id: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {} as T
      resolve(data)
    }, 1000)
  })
}

interface Result {
  name: string;
  age: number;
}

const detail = getDetail<Result>(1234);

detail.then(res => {
  res.age;
  res.name;
})

`,c=`
// 继承
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person{
  id: number;
}

interface Employee {
  payed: number;
}

// 交叉类型可以实现继承的效果
type Employer = { title: string } & Person;
type SomeOne = Employee | Employer

const person1: Employee = {
  id: 123,
  name: '老王',
  age: 30
}

const person2: Employer = {
  title: '部门主管',
  name: '王老板',
  age: 40
}

const person3: SomeOne = {

}
`,r=`
// 能生成真实对象并操作
enum Status{
 SUCCESS,
 FAIL,
 PENDING,
}

const enum ConstStatus {
 SUCCESS,
 FAIL,
 PENDING,
}

const _ConstStatus = {
  SUCCESS: 0,
  FAIL: 1,
  PENDING: 2
} as const;

 	
console.log(Status.SUCCESS,ConstStatus.SUCCESS,_ConstStatus.SUCCESS);

Status.SUCCESS = 111;
ConstStatus.SUCCESS = 111;
_ConstStatus.SUCCESS = 111;
Status[0] === 'SUCCESS'
`,y=`
/* service层定义接口及入参出参类型 */

/*--------------- /services/base/types.ts ----------------*/

export interface BaseResponse {
  msg: string;
  code: number;
}

interface RequestParams<T> {
  url: string;
  method: 'GET' | 'POST';
  query: T;
}

/*---------------------------------------------------------*/



/*--------------- /services/base/request.ts ----------------*/

function sendRequest<Response extends object, Params>(params?: RequestParams<Params>): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(params);
      const data = {} as Response
      resolve(data)
    }, 1000)
  })
}

/*---------------------------------------------------------*/



/*--------------- /services/order-service/types.ts ---------------*/
enum Status {
  SUCCESS,
  FAIL
}
export interface ListItem {
  name: string;
  age: number;
  status: Status;
  children: ListItem[];
}
export interface DetailResponse extends BaseResponse {
  data: {
    id: string;
    name: string;
    list: ListItem[]
  }
}

export type Data = DetailResponse['data']
export type List = DetailResponse['data']['list']
export type DataWithoutId = Omit<Data, 'id'>

/*---------------------------------------------------------*/



/*--------------- /services/order-services/api.ts ---------------*/
export function getDetail<Params extends { id: number }>(query: Params) {
  return sendRequest<DetailResponse, Params>({
    method: 'GET',
    url: '/spi/detail',
    query
  })
}
/*---------------------------------------------------------*/




/*--------------- 业务层使用 ---------------*/

const data = {
  list: [] as Data['list'],
  info: {} as Pick<Data, 'id' | 'name'>
}
getDetail({ id: 123 }).then(res => {
  res.data.id
  res.code
  console.log(res)
  data.list = res.data.list
  data.info.name = res.data.name
})
/*---------------------------------------------------------*/

`;return(q,N)=>{const n=u("CodeEditor");return A(),g("div",null,[D,a(n,{value:c}),b,h,a(n,{value:o}),m,f,a(n,{value:e}),C,S,x,a(n,{value:t}),T,_,v,a(n,{value:r}),w,a(i),a(n,{value:y}),E,a(d),P])}}});export{z as __pageData,L as default};
