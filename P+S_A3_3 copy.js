/*A certain sports equipment company hires out its giant trampoline at
functions and parties. When it does so, it must monitor the trampoline's use,
by recording the name of each customer currently on the trampoline and whether
they are an adult or a child. It must also make sure that no more than five
people are on the trampoline at any one time. */

/* Defines max amount of customers allowed on trampoline at one time to be 5
(max objects in array list = [0-4]) */
const MAX_CUSTOMERS = 4;

//Defines customer list as an array
var customerList = new Array();

// Defines recurring error message for when no customers have been inputted
var inputError = 'Error- there are no customers to ';

//Allows the user to input new customers
function addCustomer ()
{
  /* If trampoline list is longer than 5 customers, prevent user from adding
  any more and return error message, prompting user to delete customers. */
  if (customerList.length > MAX_CUSTOMERS)
    alert ('error- maxiumum customers reached. Please remove one or more customers.');
  else
  {
  var newIndex = customerList.length;
  customerList[newIndex]  = new Object;

  //Asks user to input the customer's name
  customerList[newIndex].name = prompt('What is the customer\'s name?').trim();
  //Makes sure user inputs name and not just blank space and prompts new input otherwise
  while (customerList[newIndex].name=='')
	  customerList[newIndex].name = prompt('Error - please enter a name:').trim();
  //Asks user to input whether the customer is an 'adult' or a 'child'
  customerList[newIndex].status = prompt('Are they an \'adult\' or a \'child\'?').trim();
  //Makes sure user inputs right status type and prompts new input otherwise
  while (!(customerList[newIndex].status== 'child' || customerList[newIndex].status == 'adult'))
    customerList[newIndex].status = prompt('Error - enter \'child\' or \'adult\':');
  }
}


//Defines that all customers be displayed, alongside their status type
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

//Allows user to delete the last customer on the list, if customers have been inputted
function deleteLastCustomer ()
{
  if (customerList.length > 0)
  {
    customerList.length--;
    alert('The customer has been deleted')
  }
  else
  alert(inputError + String('delete.')); // Returns error message if no customers to delete
}

//Distinguishes two customer types
function displayCustomerType (statusType)
{
    var message = '' //If there is previous user input, runs the for-loop
    for (var i = 0; i < customerList.length; i++)
    {
    if (customerList[i].status == statusType)
        message += customerList[i].name + ': ' + String(customerList[i].status) + '.\n';
    }
    if (message=='') //If no customers to display, returns error message
        message = (inputError + String('display.'));
    alert(message);
  }

//Prompts user to input the name and status type of the customer they want to delete
function identifyThenDeleteCustomer ()
{
    var customerName = prompt('Enter the name of the customer to delete:').trim();
    var customerStatus = prompt('Enter \'child\' or \'adult\':').trim();
//Prompts user to input specific status type, otherwise returns error message
    while (!(customerStatus == 'child' || customerStatus == 'adult'))
        customerStatus = prompt('Error - enter \'child\' or \'adult\':').trim();
    deleteCustomer(customerName,customerStatus);
}


// Allows user to delete specific customer by name and status
function deleteCustomer (aName, aStatus)
{
  for (i=0;i < customerList.length;i++)
  {
//Tells function to run only if corresponding user name and status type inputted
    if (customerList[i].name==aName && customerList[i].status == aStatus)
    {
// Keeps repeating until it gets to the second to last person in the list
      while(i < customerList.length - 1)
      {
//Moves the person who is one ahead of the current position to the current position in the list
        customerList[i].name = customerList[i+1].name;
        customerList[i].status = customerList[i+1].status;
        i++
      }
      /* removes the duplicated last person in the list and returns confirmation
      message. If input is incorrect, leaves the list alone and returns to main page  */
      deleteLastCustomer()
    }
  }
}
