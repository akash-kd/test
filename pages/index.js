import axios from "axios";




export default function Home({data}) {
  console.log({data})



  return (
    <div>
      {
        data.map(
          function callback(item){
            return (
              <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
            )
          }
        )
      }
    </div>
  )
}


export const getStaticProps = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}
