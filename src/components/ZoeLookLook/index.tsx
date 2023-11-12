import Tables from '../../data/guests'
import { Table, Person } from '../../data/guests'

const ZoeLookLook:React.FC = () => {

  const countPeople = (table: Table) => {
    let peopleLenght = 0
    table.people.forEach((person: Person) => {
      peopleLenght = peopleLenght + person.plusOne + 1
    })
    return peopleLenght
  }

  return (
    <div className='look'>
      {Tables.map((table: Table) => {
        return <div className={`tables ${table.name}-table`}>
          <p>{table.name}</p>
          <p>{countPeople(table)}人</p>
        </div>
      })}
    </div>
    )
  
} 

export default ZoeLookLook