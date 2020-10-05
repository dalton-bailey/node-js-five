A simple api server


https://fast-beach-22066.herokuapp.com/fruits

Will show the original array of fruit data. 

In postman:

GET: Displays array of fruits

POST: Will add a new fruit with an id to the array. In postman select body -> raw -> JSON and enter a new fruit.

{
    "id": "5",
    "name": "Grapes"
}

GET again and you will see the new fruit added to the array.

PUT: Will update a fruit name based on the ID selected.

{
    "id": "5",
    "name": "Blueberry"
}

The fifth element we added with POST will now be Blueberry.

DELETE: Will delete an item based on ID.


{
    "id": "5"
}

Item with the ID of 5 will be delelted. 

GET again to see the updated array.
