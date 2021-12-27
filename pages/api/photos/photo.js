// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import datas from "../../../data/coffee-store.json"

export default function handler(req, res) {
	const { search } = req.query;
	if (search) {
		const data = datas.find((item)=>(item.name.toLowerCase() === search.toLowerCase() ));
		res.status(200).json(data);
	}else {
		res.status(200).json(datas);
	}
}
