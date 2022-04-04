function errorHandle(res){

  const header ={

    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
   'Content-Type': 'application/json'
  };
  res.writeHead(404,header)
  res.write(JSON.stringify({
    "status":"falase",
    "message":"欄位未填寫正確"
  }))
  res.end();
}

module.exports =errorHandle;