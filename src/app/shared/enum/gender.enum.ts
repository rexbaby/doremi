export enum Gender {
    All = 'ALL',
    Male = 'MALE',
    Female = 'FEMALE'
}

export const GenderName: {
    [key: string]: string
} = {
    [Gender.All]: '全部',
    [Gender.Male]: '男',
    [Gender.Female]: '女',
}