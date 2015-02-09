//Problem: It looks gross in smaller browser widths and devices
//Solution: To hide the text links and swap them out with a more appropriate navigation
//Create a select and append to #menu

var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  
  //Create an option
  var $option = $("<option>/</option>");
  
  //Deal with selected options depending on current page
  
  if($anchor.parent().hasClass("selected")){
       $option.prop("selected",true);
     };
   //Option's value is the href
  $option.val($anchor.attr("href"));
  //Options's text is the text of the link
  $option.text($anchor.text());
  //Append option to select
  $select.append($option);

});

//Bind change listener to select
$select.change(function(){
  window.location = $select.val();
});
  

  
//Modify CSS to hide links on small width and show button
//Also hides select and button larger width and shows links
