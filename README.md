# Package to simulate async back requests
## Install
```shell
yarn add rml-back-mock-helper
```

## Examples
`doWithDelay<T>` - like `setTimeout`. Return `Promise<T>`
```typescript
getCollection(): Promise<IProjectModel[]> {
    return doWithDelay(() => {
        // ...some code
        return data;
    });
},
create(data: IProjectCreateModel): Promise<IProjectModel> {
    return doWithDelay(() => {
        // ...some code
        return project;
    }, 3000);
},
```

`localStorageService` - to store and get normalize data in localStorage
```typescript
{
    'id_1': {
        id: 'id_1',
        otherProp: 'value'
    }
}
```
