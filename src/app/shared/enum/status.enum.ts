export enum Status {
    Fail = 'FAIL',
    Available = 'AVAILABLE',
}

export const StatusName: {
    [key: string]: string
} = {
    [Status.Fail]: '失效',
    [Status.Available]: '有效',
}