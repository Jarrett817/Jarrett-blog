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

const enumerate = `
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
`

const dailyUse =`
// service层定义接口及入参出参类型

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
export interface DetailResponse {
  code: number;
  data: {
    id: string;
    name: string;
    list: ListItem[]
  }
}

export type Data = DetailResponse['data']

function sendRequest<Response extends object>(params?: object): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(params);
      const data = {} as Response
      resolve(data)
    }, 1000)
  })
}
function getDetail(params: { id: number }) {
  return sendRequest<DetailResponse>(params)
}


// 业务层使用

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

`

</script>

# 10 分钟速通 TS

## 必知必会

用 20%的知识解决 80%的日常开发

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

### 枚举 & 常量枚举

业务代码中常有关于枚举的判断，比如`data.status===1`，这可能分散在各个项目文件，并且缺失语义

:::warning
如果不想在业务变动时一处处地逐个修改枚举判断，建议所有使用常量或枚举而不是硬编码
:::

<CodeEditor :value="enumerate" />

编译结果如下

```js
'use strict';
var Status;
(function (Status) {
  Status[(Status['SUCCESS'] = 0)] = 'SUCCESS';
  Status[(Status['FAIL'] = 1)] = 'FAIL';
  Status[(Status['PENDING'] = 2)] = 'PENDING';
})(Status || (Status = {}));
const _ConstStatus = {
  SUCCESS: 0,
  FAIL: 1,
  PENDING: 2
};
console.log(Status.SUCCESS, 0 /* ConstStatus.SUCCESS */, _ConstStatus.SUCCESS);
```

### Utility Types 实用工具类型

#### 1. `Partial<T>`

定义和用途：
`Partial<T>`用于将一个类型 `T` 的所有属性变为可选的。这在处理对象类型时非常有用，比如在创建对象的部分属性更新函数时。
示例：

```typescript
interface User {
  name: string;
  age: number;
  email: string;
}
let partialUser: Partial<User> = {
  name: 'John'
};
```

在这个例子中，`partialUser` 可以只包含 User 接口中部分属性，因为 `Partial<User>`将 `User` 接口的所有属性都变成了可选属性。

#### 2. `Required<T>`

定义和用途：
与 `Partial<T>`相反，`Required<T>`将类型 `T` 的所有可选属性变为必选属性。这有助于确保在某些场景下对象的完整性。
示例：

```typescript
interface PartialProduct {
  name?: string;
  price?: number;
}
let requiredProduct: Required<PartialProduct> = {
  name: 'Phone',
  price: 599
};
```

这里 `Required<PartialProduct>`强制要求 `requiredProduct` 必须包含 `name` 和 `price` 属性，不能有缺失。

#### 3. `Readonly<T>`

定义和用途：
`Readonly<T>`用于创建一个新的类型，其所有属性都是只读的。这在需要确保对象属性不被意外修改的场景下非常有用，比如配置对象或者常量对象。
示例：

```typescript
interface Settings {
  theme: string;
  fontSize: number;
}
let readonlySettings: Readonly<Settings> = {
  theme: 'dark',
  fontSize: 14
};
// readonlySettings.theme = 'light'; // 这行代码会报错，因为属性是只读的
```

#### 4. `Pick<T, K>`

定义和用途：
`Pick<T, K>`从类型 T 中挑选出属性集 K 所指定的属性，创建一个新的类型。K 是一个联合类型，代表要选择的属性名。
示例：

```typescript
interface Car {
  brand: string;
  model: string;
  year: number;
  color: string;
}
type CarInfo = Pick<Car, 'brand' | 'model'>;
let myCarInfo: CarInfo = {
  brand: 'Toyota',
  model: 'Corolla'
};
```

在这个例子中，CarInfo 类型只包含 Car 接口中的 brand 和 model 属性。

#### 5. `Omit<T, K>`

定义和用途：
与 `Pick<T, K>`相反，`Omit<T, K>`从类型 `T` 中排除属性集 `K` 所指定的属性，生成一个新的类型。这在想要去除某些不需要的属性时很有用。
示例：

```typescript
interface Person {
  name: string;
  age: number;
  address: string;
  phone: string;
}
type PersonWithoutAddress = Omit<Person, 'address'>;
let person: PersonWithoutAddress = {
  name: 'Alice',
  age: 30,
  phone: '1234567890'
};
```

这里 `PersonWithoutAddress` 类型是从 `Person` 接口中排除了 `address` 属性后的新类型。

#### 6. `Record<K, T>`

定义和用途：
`Record<K, T>`用于创建一个新的类型，其属性键的类型为 `K`，属性值的类型为 `T`。`K` 通常是一个字符串字面量类型或者联合类型，`T` 可以是任何类型。
示例：

```typescript
type Colors = 'red' | 'green' | 'blue';
type ColorMap = Record<Colors, string>;
let colorMap: ColorMap = {
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF'
};
```

这个例子中，`ColorMap` 类型的对象以 `Colors` 联合类型中的字符串作为键，以 `string` 类型作为值。

#### 7. `Exclude<T, U>`

定义和用途：
`Exclude<T, U>`用于从类型 `T` 中排除可以赋值给类型 `U` 的元素，返回剩余的类型。它主要用于处理联合类型。
示例：

```typescript
type Numbers = 1 | 2 | 3 | 4 | 5;
type OddNumbers = Exclude<Numbers, 2 | 4>;
let oddNumber: OddNumbers = 1;
```

在这里，`OddNumbers` 是从 `Numbers` 联合类型中排除了偶数 2 和 4 后剩下的奇数类型。

#### 8. `Extract<T, U>`

定义和用途：
与 `Exclude<T, U>`相反，`Extract<T, U>`从类型 `T` 中提取可以赋值给类型 `U` 的元素，生成一个新的类型。
示例：

```typescript
type AllNumbers = 1 | 2 | 3 | 4 | 5;
type EvenNumbers = Extract<AllNumbers, 2 | 4>;
let evenNumber: EvenNumbers = 2;
```

此例中，`EvenNumbers` 是从 `AllNumbers` 联合类型中提取出偶数 2 和 4 后的类型。

## 业务应用实践

<CodeEditor :value="dailyUse" />
