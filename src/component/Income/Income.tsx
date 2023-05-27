import { useSearchParams } from "react-router-dom"
import { Users } from "../../data/data"
import s from './Income.module.scss';

export type UserDataType = {
    type: "income" | "outcome" | "loan" | "investment"
    _id: string
    amount: number
    name: {
        first: string
        last: string
    }
    company: string
    email: string
    phone: string
    address: string

}

const Income = (props: any) => {

    const [searParams] = useSearchParams()

    let filtredByQuery: any

        let param = searParams.get("tab")

    param === "0" ? filtredByQuery = Users.filter(el => el.type === "income").sort((a: any, b: any) => +a.amount - (+b.amount))
        : param === "1" ? filtredByQuery = Users.filter(el => el.type === "outcome").sort((a: any, b: any) => +a.amount - (+b.amount))
            : param === "2" ? filtredByQuery = Users.filter(el => el.type === "loan").sort((a: any, b: any) => +a.amount - (+b.amount))
                : param === "3" ? filtredByQuery = Users.filter(el => el.type === "investment").sort((a: any, b: any) => +a.amount - (+b.amount))
                    : filtredByQuery = []

    return (
        <div>
            <div className={s.tableHead}>
                <div className={s.labelTable}>
                    Name
                </div>
                <div className={s.labelTable}>
                    Account
                </div>
            </div>
            {filtredByQuery.map((el: any, index: any) => {
                return <div className={s.usersTab}>
                    <div className={s.usersData}>
                        {`${el.name.first} ${el.name.last}`}
                    </div>
                    <div className={s.usersData}>
                        {el.amount}
                    </div>
                </div>
            })}
        </div>
    )
}

export default Income