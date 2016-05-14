function foo() {
   // window[func](data);
    //console.log(data);
    console.log(arguments);
}
//AIzaSyDnFUZRKifd-swOHGfPwb72mA1eTqrir-g
$(function () {
    $('.Part1').on('click', '.btn', part1);
    //$('.Part1').on('keypress', '.search', part1);
    $('.search').on('keypress',function (e) {
        var key = e.which;
        if (key == 13)  
        {
            console.log(e)
            $('.Part1 .btn').click();
            return false;
        }
    });

    $('#page-selection').bootpag({
        total: 1000,
        page: 1,
        maxVisible: 10
    }).on('page', function (event, num) {
        part1(event, num); // or some ajax content loading...
    });


    function part1(event, num) {
        $('#page-selection').addClass('in');
        var offset = num * 10 || 0;
        var searchText = $('.search').val();
        var params = {
            // Request parameters
            "q": searchText,
            "count": "10",
            "offset": offset,
            "mkt": "en-us",
            "safesearch": "Moderate",
        };

        $.ajax({
            url: "https://bingapis.azure-api.net/api/v5/search/?" + $.param(params),
            beforeSend: function (xhrObj) {
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "22b61257a06a404b874cae000960b551");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function (data) {
            console.log(data);
            //console.log(data.webPages.value[0]);
            //console.log(data.webPages.value[0].deepLinks);
            //console.log('Length',data.webPages.value[0].deepLinks.length);
            var html = $('#template').html();
            var tmpl = _.template(html);
            var result = tmpl({"data":data});
            $('#res').html(result);
        })
        .fail(function () {
            alert("error");
        });
    }
    


    $('.Part2').on('click','.btn' , part2);
    function part2() {
        console.clear();

        function Human(name, age, sex, height, weight) {
            this.name = typeof name !== 'undefined' ? name : 'worker';
            this.age = age;
            this.sex = sex;
            this.height = height;
            this.weight = weight;
        }

        function Worker(name, age, sex, height, weight, workplace, salary) {
            Human.apply(this, arguments);
            this.workPlace = workplace;
            this.salary = salary;
        }

        Worker.prototype = Object.create(Human.prototype);

        function Student(name, age, sex, height, weight, studyPlace, scholarship) {
            Human.apply(this, arguments)
            this.studyPlace = studyPlace;
            this.scholarship = scholarship;
        }

        Student.prototype = Object.create(Human.prototype);

        Worker.prototype.work = function() {
            console.log('My name is ' + this.name + '. I`m ' + this.age + ' years old. I work for ' + this.workPlace + ' my salary is ' + this.salary);
            for (var i in this) {
                if (this.hasOwnProperty(i)) {
                    console.log(i, this[i]);
                };
            
            }
            console.log(this);
        }

        Student.prototype.watchSeries = function () {
            console.log('My name is ' + this.name + '. I`m ' + this.age + ' years old. I study in ' + this.studyPlace + ' my scholarship is ' + this.scholarship);
            for (var i in this) {
                if (this.hasOwnProperty(i)) {
                    console.log(i, this[i]);
                };

            }
            console.log(this);
        }
        var worker1 = new Worker('Petya', 35, 'Male', 160, 80, 'Microsoft', 1000);
        worker1.work();
        var worker2 = new Worker('Tanya', 40, 'Female', 160, 60, 'Google', 1500);
        worker2.work();

        var student1 = new Student('Vasya', 19, 'Male', 160, 70, 'MIT', 500);
        student1.watchSeries();
        var student2 = new Student('Dasha', 19, 'female', 150, 50, 'DonNU', 300);
        student2.watchSeries();
        $(this).parent().append('<p><br>look into console</p>');
        //console.log($(this).parent());
    };
});


    
