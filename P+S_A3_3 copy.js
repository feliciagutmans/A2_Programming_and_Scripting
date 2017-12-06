/*A certain sports equipment company hires out its giant trampoline at
functions and parties. When it does so, it must monitor the trampoline's use,
by recording the name of each customer currently on the trampoline and whether
they are an adult or a child. It must also make sure that no more than five
people are on the trampoline at any one time. */

/* Defines the maximum amount of customers allowed on trampoline at one time
to be 5 */
const MAX_CUSTOMERS = 5;

var customerList = new Array();

var inputError = 'Error- there are no customers to ';

//Here we allow the user to input new customers
function addCustomer ()
{
  if (customerList.length > MAX_CUSTOMERS)
    alert ('error- maxiumum customers reached. Please remove one customer');
  else
  var newIndex = customerList.length;
  customerList[newIndex]  = new Object;

  //Asks user to input the customer's name
  customerList[newIndex].name = prompt('What is the customer\'s name?');
  //Asks user to input whether the customer is an 'adult' or a 'child'
  customerList[newIndex].status = prompt('Are they an \'adult\' or a \'child\'?');
}


//Defines that all customers be displayed alongside their status type
function displayAllCustomers ()
{
  var message = ''
  for (var i = 0; i < customerList.length; i++)
  {
  message += customerList[i].name + ': '
          + String(customerList[i].status) + '.\n';
  }

//Returns error message if no customers were previously inputted to the system
  if (message=='')
      message = (inputError + String('display.'));
  alert(message);
}

//Allowing user to delete the last customer inputted
function deleteLastCustomer ()
{
  if (customerList.length > 0)
  {
    customerList.length--;
    alert('The customer has been deleted')
  }
  else
  alert(inputError + String('delete.')); // Returns error if no customers to delete
}

//Distinguishes two customer types
function displayCustomerType (statusType)
{
    var message = '' //when user inputs message
    for (var i = 0; i < customerList.length; i++)
    {
    if (customerList[i].status == statusType)
        message += customerList[i].name + ': ' + String(customerList[i].status) + '.\n';
    }
    if (message=='')
        message = (inputError + String('display.'));
    alert(message);
  }

//Prompting user to input the name and status type of the customer they want to delete
function identifyThenDeleteCustomer ()
{
    var customerName = prompt('Enter the name of the customer to delete:');
    var customerStatus = prompt('Enter \'child\' or \'adult\':');
    while (!(customerStatus == 'child' || customerStatus == 'adult'))
        customerStatus = prompt('Error - enter \'child\' or \'adult\':');
    deleteCustomer(customerName,customerStatus);
}


// Prompting user to delete specific customer by name and status
function deleteCustomer (aName, aStatus)
{
  for (i=0;i < customerList.length;i++)
  {
    //Finds the position of the person the user wants to delete
    if (customerList[i].name==aName && customerList[i].status == aStatus)
    {
      /* Keeps repeating until it gets to the second to last person in the
       list*/
      while(i < customerList.length - 1)
      {
        /* moves the person who is one ahead of the current position
         to the current position in the customer list */
        customerList[i].name = customerList[i+1].name;
        customerList[i].status = customerList[i+1].status;
        i++
      }
      // removes the duplicated last person in the list
      deleteLastCustomer()
    }
  }
}
