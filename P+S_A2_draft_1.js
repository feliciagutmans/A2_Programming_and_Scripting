/*A certain sports equipment company hires out its giant trampoline at
functions and parties. When it does so, it must monitor the trampoline's use,
by recording the name of each customer currently on the trampoline and whether
they are an adult or a child. It must also make sure that no more than five
people are on the trampoline at any one time. */

const MAX_CUSTOMERS = 5;

var customerList = new Array();

function addCustomer ()
{
  if (customerList.length > 5)
    alert ('error- maxiumum customers reached. Please remove one customer from trampoline'); //trying new code
  else
  var newIndex = customerList.length;
  customerList[newIndex]  = new Object;
  customerList[newIndex].name = prompt('What is the customer\'s name?');
  customerList[newIndex].status = prompt('Are they an \'adult\' or a \'child\'?');
}

//Question: Don't know whether the customer type should be displayed here too?
function displayAllCustomers ()
{
  var message = ''
  for (var i = 0; i < customerList.length; i++)
  {
  message += customerList[i].name + ': '
          + String(customerList[i].status) + '.\n';
  }
  if (message=='')
      message = 'There are no customers to display.';
  alert(message);
}

function deleteLastCustomer ()
{
  if (customerList.length > 0)
  {
    customerList.length--;
    alert('The last customer has been deleted from the trampoline list.')
  }
  else
    alert ('There are no customers to delete.')
}

//Not Sure about this one
function displayCustomerType (statusType)
{
  if (customerList.length > 0)
    {
      if (statusType = 'child')
        displayCustomerType('child');
      else
        displayCustomerType('adult');
    }
  else
    alert ('There are no customers to delete.')
}

function identifyThenDeleteCustomer ()
{
    var customerName = prompt('Enter the name of the customer to delete:');
    var customerStatus = prompt('Enter \'child\' or \'adult\':');
    while (!(customerStatus == 'child' || customerStatus == 'adult'))
        customerStatus = prompt('Error - enter \'child\' or \'adult\':');
    deleteCustomer(customerName,customerStatus);
}

//I don't know about this one either
function deleteCustomer (aName, aStatus)
{

}
