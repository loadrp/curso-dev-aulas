function status(request, response) {
  return response.status(200).json({"chave": "curso.dev é bom demais"})
}

export default status