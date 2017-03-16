function popup(sndbLink, windowName)
{
   if ( !window.focus ) {  // Check if popup already exists
      return true;
   }

   var href;
   if ( typeof(sndbLink) == 'string' ) {
      href=sndbLink;
   } else {
      href=sndbLink.href;
   }

   var pu = window.open(href, windowName, 'width=600,height=300,top=100,left=50,scrollbars=yes');
   if (href.indexOf(".web") > 0) {
      $(pu.document).ready(function() {
	alert("*** DROP .web suffix from name ***\n\nPress OK to see the contents");
      });
   }
   return false;
}

