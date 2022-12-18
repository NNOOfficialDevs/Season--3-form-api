const { default: axios } = require('axios')
const express = require('express')
const app = express()
var cors = require('cors')

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())



app.post('/', (req, res) => {
    const google_sheet = "https://script.google.com/macros/s/AKfycbxbGIPV-Jr2gIgJocHzmMvipm0cNXkVNXv6_C826ATBAhU1Et_aqGd0jtUrDHLEou1u/exec"

    // https://script.google.com/macros/s/AKfycbxbGIPV-Jr2gIgJocHzmMvipm0cNXkVNXv6_C826ATBAhU1Et_aqGd0jtUrDHLEou1u/exec
    console.log(req.body);
      const name = req.body.name
      const email = req.body.email
      const Phone = req.body.Number
      const SchoolName = req.body.SchoolName
      const SchoolBranch = req.body.SchoolBranch
      const Division = req.body.Division
      const District = req.body.District
      const Upazila = req.body.Upazila
      const Group = req.body.Group
      const PaymentMethod = req.body.PaymentMethod
      const Transaction = req.body.Transaction
      const Referal = req.body.Referal
      const DataFrom = "Season 3 official form"


    const url = `${google_sheet}?Name=${encodeURIComponent(name)}&Email=${encodeURIComponent(email)}&Number=${encodeURIComponent(Phone)}&SchoolName=${encodeURIComponent(SchoolName)}&SchoolBranch=${encodeURIComponent(SchoolBranch)}&Division=${encodeURIComponent(Division)}&District=${encodeURIComponent(District)}&Upazila=${encodeURIComponent(Upazila)}&Group=${encodeURIComponent(Group)}&PaymentMethod=${encodeURIComponent(PaymentMethod)}&Transaction=${encodeURIComponent(Transaction)}&Referal=${encodeURIComponent(Referal)}`

    axios.get(url).then(response =>{
        console.log(response);
        res.send(response)
    }).catch(err =>{
        console.log(err);
        res.send(err)
    })

})

app.get('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})


app.listen(process.env.PORT || 4000)