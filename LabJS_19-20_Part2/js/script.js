(function() {
    $.getJSON("https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json", getJSON);

    function getJSON(json) {
        var skillsArr = [];
        var usersArr = [];
        var friendsArr = [];

        _.forEach(json, function(item) {
            _.forEach(item.skills, function(subItem) {
                skillsArr.push(subItem);
            });

            usersArr.push({
                'name': item.name,
                'count': item.friends.length
            });

            _.forEach(item.friends, function(subItem) {
                friendsArr.push(subItem.name);
            });
        });

        var skills = _.sortBy(_.union(skillsArr));
        var names = _.map(_.sortBy(usersArr, 'count'), 'name');
        var friends = _.union(friendsArr);

        console.log('Soretd skills: ', skills);
        console.log('Sorted names: ', names);
        console.log('Unique friends: ', friends);
        alert('Look into console!');
    }
})();