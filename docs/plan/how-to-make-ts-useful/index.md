<script setup>
  const demo1 =`/** This is a cool guy. */
interface Person {
  /** This is name. */
  name: string,
}

const p: Person = {
    name: 'cool'
}`
const conditionalType=`
type MyType<T> = T extends string ? T : '1';
const a: MyType<string> = 'test';
const b: MyType<number> = 1
`

const wxmini = `
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
`

const generics = `
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

`

const typeOrInterface =`
// 继承
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person{
  id: number;
}

// interface可以声明合并
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
`
</script>

# TS：10 分钟开启高效开发模式

:::tip

:::

## 必知必会

### type & interface

- type 类型别名。适用于定义复杂的类型组合，如联合类型和交叉类型。当需要表示一个值可能是多种类型之一，或者一个类型需要同时满足多种类型的特征时，类型别名非常方便
- interface 接口。更适合用于定义对象的形状，尤其是在面向对象编程或者定义 API 的返回值和参数类型时。当需要描述一个类应该实现的契约（如具有哪些方法和属性）时，接口是很好的选择

<CodeEditor :value="typeOrInterface" />

### 条件类型

extends 既可以用于继承，也可用于类型约束

<CodeEditor :value="conditionalType" />

### namespace

用于防止类型重命名冲突，比如微信小程序提供了全局类型的 namespace

<CodeEditor :value="wxmini"/>

### 泛型

合理使用泛型是 ts 类型可用性的保障，能够更好的封装通用方法，也能更好地阅读、使用库

<CodeEditor :value="generics" />

## ts

<CodeEditor :value="demo1" />
