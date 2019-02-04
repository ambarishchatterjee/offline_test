# offline_test
Objective: Create a slider of 10 random images. Avoid using any frameworks like React or Angular. You may use libraries like jquery.
 
Requesting https://picsum.photos/list returns a json list with information about images & their author. 
 
We can use the “id” field to request a specific image at a specific size. 
 
An example of this is:  https://picsum.photos/400/600?image=0 . This url requests image of id 0 at size 400x600.
 
Requirements:
1)      All images should be size 200 x 300. 
2)      Above every image in the slider there should be the author’s name.
3)      On page refresh it should load different random images
 

Evaluation Criteria
 - Code Clarity
 - Code Reuse
 - Additional points for unit tests

