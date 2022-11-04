import type { NextApiRequest, NextApiResponse } from 'next'

type OperationType = 'addition' | 'subtraction' | 'multiplication'

type SuccessResponse = {
    slackUsername: string
    operation_type: OperationType
    result: number
}

type FailureResponse = {
    slackUsername: string
    result: number
    error: string
}

type RequestBody = {
    operation_type: OperationType
    x: number
    y: number
}

export default function task2(
    req: NextApiRequest,
    res: NextApiResponse<SuccessResponse | FailureResponse>
) {
    const slackUsername = 'Niscolinx'



    const requestBody: RequestBody = {
        ...req.body,
        operation_type: req.body.operation_type.toLowerCase() as OperationType,
    }

    const { operation_type, x, y } = requestBody

    const handleArithmeticOperation = (
        operation_type: OperationType,
        x: number,
        y: number
    ) => {
        let result: number


        switch (operation_type.toLowerCase()) {
            case 'addition':
                return (result = x + y)

            case 'subtraction':
                return (result = x - y)

            case 'multiplication':
                return (result = x * y)

            default:
                return (result = 0)
        }
    }


    if (
        operation_type.toLowerCase() !== 'addition' &&
        operation_type.toLowerCase() !== 'subtraction' &&
        operation_type.toLowerCase() !== 'multiplication'
    ) {
        return res.status(400).json({
            error: `<${operation_type}> is not a valid operation type`,
            slackUsername,
            result: NaN,
        })
    }

    if(!x || !y) {
        return res.status(400).json({
            error: 'Inputs x and y are required',
            slackUsername,
            result: NaN,
        })
    }

    if(typeof x !== 'number' || typeof y !== 'number') {
        return res.status(400).json({
            error: 'Inputs x and y must be numbers',
            slackUsername,
            result: NaN,
        })
    }

    const result = handleArithmeticOperation(operation_type, x, y)

    res.status(200).json({
        slackUsername,
        result,
        operation_type,
    })
}
