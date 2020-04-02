
async function findAll(req, res, next) {
    try {
        const data = {
            "models": [
              {
                "id": 1,
                "name": "Toyota"
              },
              {
                "id": 2,
                "name": "Mazda"
              }
            ],
            "cars": [
              {
                "id": 1,
                "name": "Corolla",
                "modelId": 1
              },
              {
                "id": 2,
                "name": "Mazda3",
                "modelId": 2
              },
              {
                "id": 3,
                "name": "Mazda6",
                "modelId": 2
              },
              {
                "id": 4,
                "name": "Miata",
                "modelId": 2
              },
              {
                "id": 5,
                "name": "Camry",
                "modelId": 1
              },
              {
                "id": 6,
                "name": "CX-9",
                "modelId": 2
              }
            ]
          }

    res.status(201).send({
        data,
        });
    } catch (error) {
        next(error)
    }
}

   module.exports = {
    findAll
  }
  