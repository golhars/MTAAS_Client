function MtaasRouteConfig(app) {

    this.app = app;
    this.routeTable = [];
    this.init(); //methos to initialize
}


MtaasRouteConfig.prototype.init = function () {

    var self = this;

    this.addRoutes();
    this.processRoutes();


}


MtaasRouteConfig.prototype.processRoutes = function () {

    var self = this;

    self.routeTable.forEach(function (route) {

        if (route.requestType == 'get') {

            console.log(route);
            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'post') {

            console.log(route);
            self.app.post(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'delete') {

            console.log(route);
            self.app.delete(route.requestUrl, route.callbackFunction);
        }

    });
}


MtaasRouteConfig.prototype.addRoutes = function () {

    var self = this;

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/signup',
        callbackFunction : function (request, response) {

            response.render('signup', { title : "Create Product Category" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/customerdetail',
        callbackFunction : function (request, response) {

            response.render('customerdetail', { title : "Create Product Category" });
        }
    });



    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/index',
        callbackFunction : function (request, response) {

            response.render('index', { title : "Create Product Category" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/testerinfo',
        callbackFunction : function (request, response) {

            response.render('testerinfo', { title : "Create Product Category" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/login',
        callbackFunction : function (request, response) {

            response.render('login', { title : "Create Product Category" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/testerdashboard',
        callbackFunction : function (request, response) {

            response.render('testerdashboard', { title : "Create Product Category" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/testerprofile',
        callbackFunction : function (request, response) {

            response.render('testerprofile', { title : "Create Product Category" });
        }
    });



    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/searchcustomer',
        callbackFunction : function (request, response) {

            response.render('searchcustomer', { title : "Create Product Category" });
        }
    });



    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/customerinfo',
        callbackFunction : function (request, response) {

            response.render('customerinfo', { title : "Create Product Category" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/customerview',
        callbackFunction : function (request, response) {

            response.render('customerview', { title : "Create Product Category" });
        }
    });


    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/currentapplist',
        callbackFunction : function (request, response) {

            response.render('currentapplist', { title : "Create Product Category" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/workingenvironment',
        callbackFunction : function (request, response) {

            response.render('workingenvironment', { title : "Create Product Category" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/about',
        callbackFunction : function (request, response) {

            response.render('about', { title : "testify aboout " });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/blog',
        callbackFunction : function (request, response) {

            response.render('blog', { title : "Testify Blogs" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/contact',
        callbackFunction : function (request, response) {

            response.render('contact', { title : "Testify Conatct" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/app_status',
        callbackFunction : function (request, response) {

            response.render('app_status', { title : "Testify Conatct" });
        }
    });


    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/testerinfo_rate',
        callbackFunction : function (request, response) {

            response.render('testerinfo_rate', { title : "Testify Conatct" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/customer_addapp',
        callbackFunction : function (request, response) {

            response.render('customer_addapp', { title : "Testify Conatct" });
        }
    });
    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/currentapplist_customer',
        callbackFunction : function (request, response) {

            response.render('currentapplist_customer', { title : "Testify Conatct" });
        }
    });
    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/customer_pay',
        callbackFunction : function (request, response) {

            response.render('customer_pay', { title : "Testify Conatct" });
        }
    });

    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/manager_info',
        callbackFunction : function (request, response) {

            response.render('manager_info', { title : "Testify Conatct" });
        }
    });


    self.routeTable.push({

        requestType : 'get',
        requestUrl : '/customerrequest',
        callbackFunction : function (request, response) {

            response.render('customerrequest', { title : "Testify Conatct" });
        }
    });
}

module.exports = MtaasRouteConfig;