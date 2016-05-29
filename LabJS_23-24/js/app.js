require(
    [   
        ['lodash'],
        ['jquery'],
        'model',
        'view',
        'controller'
    ],
    function (_, $, Model, View, Controller) {
        var model = new Model.Model([{ title: 'First task', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, molestiae, assumenda? Laudantium voluptatum natus non necessitatibus. Ut ipsa sapiente eaque libero excepturi odit repudiandae. Quas amet ipsam veniam quae tenetur!'},
        { title: 'Second task', text: 'Sapiente, molestiae, assumenda? Laudantium voluptatum natus non necessitatibus. Ut ipsa sapiente eaque libero excepturi odit repudiandae. Quas amet ipsam veniam quae tenetur!' },
        { title: 'Third task', text: 'Ut ipsa sapiente eaque libero excepturi odit repudiandae. Quas amet ipsam veniam quae tenetur!' },
        { title: 'Fourth task', text: 'Quas amet ipsam veniam quae tenetur!' },
                ]);
        var view = new View.View(model);
        var controller = new Controller.Controller(model, view);
    }
);