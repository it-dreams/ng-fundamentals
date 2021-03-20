# ng-fundamentals
Angular fundamental project is covered all building blocks of angular in step by step. First of all you need to clone this project then you need to install all node module. So, please run the command `npm install | npm i`.

## step 1

### Installation

`npm install -g @angular/cli | npm i -g @angular/cli`

### Creating project

`ng new ng-fundamentals`

### add server side rending

`ng add @nguniversal/express-engine`

### creating components

`ng generate component components/home | ng g c components/home`
`ng g c components/about`
`ng g c components/courses`
`ng g c components/courses/course`
`ng g c components/contact`
`ng g c components/login`
`ng g c components/dashboard`
`ng g c layout/header`
`ng g c layout/navigation`
`ng g c layout/footer`
`ng g c layout/sidebar`

* skip spec file
`ng g c components/home --skipTests`

* skip html & css/scss file 
`ng g c components/home -it -is`


### Add ngx-bootstrap

`npm install ngx-bootstrap --save`

### Add routing existing app

`ng generate module app-routing --flat --module=app`

### create service

`ng g s services/myCourses`

### Create Directive

`ng g d directive/highlight`

### Create Pipe

`ng g pipe pipe/substring`