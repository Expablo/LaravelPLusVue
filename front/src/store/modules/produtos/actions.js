import { modelApi }  from '@/api'


const fetch = async context => {
  try {
    const data = await modelApi.get('/produtos')
    context.commit('SAVE_DATA', data.data)
    return true
  }catch(err){
    console.log(err, 'err')
  }
}

const add = async (context, data) => {
	console.log(data)
	const res = await modelApi.post('/produtos', data);
	return res
}

const update = async (context, data) => {
  const res = await modelApi.put(`/produtos/${data.id}`, data);
	return res
}

const del = async (context, data) => {
  const res = await modelApi.delete(`/produtos/${data}`);
  return res
}


export default {
  fetch,
  update,
  add,
  del
}
