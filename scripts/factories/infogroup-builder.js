angular.module('dashboardApp')
.factory('infoGroupBuilder', function() {

  return {

    buildFor: function(group) {

      var infoGroup = {};

      infoGroup.group = group;
      infoGroup.title = infoGroup.group.group.description;
      infoGroup.charts = [];

      if (infoGroup.group.children.length > 0) {
        infoGroup.group.children.forEach(function(c) {

          var chart = {};

          chart.name = c.group.description;
          chart.labels = c.subs.map(function(sub) { return sub.subscriptionName; });
          chart.data = c.subs.map(function(sub) { return sub.subscriberCount; });

          infoGroup.charts.push(chart);

        });
      } else {
        var chart = {};
        console.log(group);
        chart.name = group.group.name;
        chart.labels = group.subs.map(function(sub) { return sub.subscriptionName; });
        chart.data = group.subs.map(function(sub) { return sub.subscriberCount; });
        infoGroup.charts.push(chart);
      }


      return infoGroup;

    }
  };

});
