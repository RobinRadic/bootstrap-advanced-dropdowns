Bootstrap Advanced Dropdowns
=============================


[![Bower](https://img.shields.io/bower/v/bootstrap-advanced-dropdowns.svg)](https://www.npmjs.com/package/bootstrap-advanced-dropdown)
[![npm downloads](https://img.shields.io/npm/dm/bootstrap-advanced-dropdowns.svg)](https://www.npmjs.com/package/bootstrap-advanced-dropdown)
[![npm version](https://img.shields.io/npm/v/bootstrap-advanced-dropdowns.svg)](https://www.npmjs.com/package/bootstrap-advanced-dropdown)
[![License](http://img.shields.io/badge/license-MIT-ff69b4.svg?style=flat-square)](http://radic.mit-license.org)


Improved dropdown menus for bootstrap. Highly customizable `SCSS` styles with a modular approach and easymode theme creation.
 
Comes with several ready to use example themes. 

#### [View Demo](http://robin.radic.nl/bootstrap-advanced-dropdowns/)

### Features

##### Dropdown features
- Unlimited multi-level dropdown menu
- Scrollable dropdown
- Dropdown notification list
- Dropdown task list
- Normal and inversed dropdown colors
- Icons and badges
- Headers, footers, seperators.
- Additional utility classes to help with positioning and dimensions

##### Implementation features
- Easy to override or extend
- Modular approach. Exclude stuff you don't want / Include only the stuff you want.
- Highly customisable
- Or if your already content with the package as-is, simply include the css or scss in your own project.


### Installation

##### Bower
`bower install --save bootstrap-advanced-dropdowns`

##### Npm
`npm install --save bootstrap-advanced-dropdowns`

##### Direct download
[Click here](https://gitbub.com) to download the latest version


### Implementing

##### CSS
Without the use of SCSS, you can simply reference bootstrap-advaced-dropdowns in your html. 
```html
<link href="path/to/bootstrap-advanced-dropdowns/bootstrap-advaced-dropdowns.css" type="text/css" rel="stylesheet"/>
<link href="path/to/bootstrap-advanced-dropdowns/themes/dropdown-theme-default.css" type="text/css" rel="stylesheet"/>
```

##### SCSS
By using SCSS you will have multiple ways of implementing. 

Here's an **example** of how to completely customize bootstrap-advanced-dropdowns. 

**Note** that there are other ways of implementing. This is the most complete one. 
 
**Before importing any bootstrap-advanced-dropdowns `scss` file, ensure bootstrap variables and mixins have been imported**
```scss
@import "path/to/bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap/variables";
@import "path/to/bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap/mixins";
```
 
**your-project / _variables.scss**
```scss
// ... your code ...

$dropdown-class-prefix:                                     'dropdown';
$dropdown-include-utilities:                                true;
$dropdown-include-notifications:                            true;
$dropdown-include-task-list:                                true;
$dropdown-include-scrollable:                               true;

// ... your code ...
```

**your-project / stylesheet.scss**
```scss
// ... your code ...

@import "your-project/_variables.scss"

// ... your code ...

@import "path/to/bootstrap-advanced-dropdowns/dropdown";
```

If your `SCSS` structure uses a multi-theme approach, you can add the following to the theme file.
Otherwise, you could append it to the code above.

**your-project / themes / theme-one-stylesheet.scss**
```scss
// ... your code ...

@import "your-project/_variables.scss"

// ... your code ...


// Overide bootstrap-advanced-dropdown theme variables.
// Check out the bootstrap-advanced-dropdown/_theme-variables.scss file for all variables

@import "path/to/bootstrap-advanced-dropdowns/theme-variables";

$dropdown-box-shadow-size:                                  5px;
$dropdown-wide-min-width:                                   300px;
$dropdown-header-font-size:                                 13px;
$dropdown-bg:                                               #ffffff;
$dropdown-box-shadow-color:                                 rgba(#222, 0.2);
$dropdown-header-bg:                                        #e4e4e4;
$dropdown-inverse-bg:                                       #333333;
$dropdown-inverse-box-shadow-color:                         rgba(#000, 0.2);
$dropdown-inverse-header-bg:                                #454545;
$dropdown-inverse-header-color:                             #b3b3b3;
$dropdown-tasklist-item-border-color:                       #e4e4e4;
$dropdown-inverse-tasklist-item-border-color:               #484848;
$dropdown-inverse-notifications-icon-color:                 #d8d1d1;
$dropdown-inverse-notifications-item-border-color:          #484848;

@import "path/to/bootstrap-advanced-dropdowns/themes/theme";
```
