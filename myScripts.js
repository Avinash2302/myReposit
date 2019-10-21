var Categories = []

// Initializing a page level object
var newlyCreatedChild = [];
var childDataAll = [];
var parentForm = {};
var eventType = "SUBMIT";



function clear() {
    //$('#SrvDate').val('');
    $('#BpName').val('');
    $('#FCity').val('');


    $('#orderItemError').empty();
    $('#add').removeClass('d-none');
    $('#update').addClass('d-none').removeAttr('onclick');
}



$(document).ready(function () {
    $('#clear').on('click', function () { clear(); });




    $('#submitSaveOrder').click(function () {

        var dataForAPI = {
            parentForm: parentForm,
            childDataAll: childDataAll
        };

        console.log("dataForAPI----", dataForAPI);

        $.ajax({
            type: 'POST',
            url: '/tTer/save',
            data: JSON.stringify(dataForAPI),
            contentType: 'application/json',
            success: function (data) {

                alert('Successfully saved');

                $('#orderdetailsItems').empty();
                window.location.href = "/tTer/tTerListAll";
            }
        });
    });





    //$('#submitSaveOrder1').click(function () {

    //    var dataForAPI = {
    //        parentForm: parentForm,
    //        childDataAll: childDataAll
    //    };

    //    console.log("dataForAPI----", dataForAPI);

    //    var isAllValid = true;
    //    Delete();

    //    //validate order items
    //    $('#orderItemError').text('');
    //    var list = [];
    //    var errorItemCount = 0;
    //    var trId = 0;

    //    $('#child_table_id tbody tr').each(function (index, ele) {
    //        if ($('#BpName', this).val() == "" || $('#FCity', this).val() == "" ||
    //            $('#TCity', this).val() == "" ||
    //            $('#FSRNo', this).val() == "" ||
    //            $('#Remark', this).val() == "" ||
    //            $('#DARate', this).val() == "" ||
    //            $('#DAAmount', this).val() == "" ||
    //            $('#PcRate', this).val() == "" ||
    //            $('#PcAmount', this).val() == "" ||
    //            $('#RBFare', this).val() == "" ||
    //            $('#LodgingChg', this).val() == "" ||
    //            $('#OthExp', this).val() == "" ||
    //            $('#RowTotal', this).val() == "" ||
    //            $('#BpId', this).val() == "" ||
    //            $('#DistKm', this).val() == "" ||
    //            $('#AddKm', this).val() == "" ||
    //            $('#InvAmt', this).val() == "" ||
    //            $('#InvNum', this).val() == "" ||
    //            $('#SrnNo', this).val() == ""
    //        ) {
    //            errorItemCount++;
    //            $(this).addClass('error');
    //        } else {
    //            var orderItem = {
    //                TrDetId: $(this).attr('id') || 0,
    //                TrId: $(this).attr('data-trId') || 0,
    //                //SrvDate: $('.SrvDate', this).val(),
    //                BpName: $('#BpName', this).val(),
    //                FCity: $('#FCity', this).val(),
    //                TCity: $('#TCity', this).val(),
    //                FSRNo: $('#FSRNo', this).val(),
    //                Remark: $('#Remark', this).val(),
    //                DARate: $('#DARate', this).val(),
    //                DAAmount: $('#DAAmount', this).val(),
    //                PcRate: $('#PcRate', this).val(),
    //                PcAmount: $('#PcAmount', this).val(),
    //                RBFare: $('#RBFare', this).val(),
    //                LodgingChg: $('#LodgingChg', this).val(),
    //                OthExp: $('#OthExp', this).val(),
    //                RowTotal: $('#RowTotal', this).val(),
    //                BpId: $('#BpId', this).val(),
    //                DistKm: $('#DistKm', this).val(),
    //                AddKm: $('#AddKm', this).val(),
    //                InvAmt: $('#InvAmt', this).val(),
    //                InvNum: $('#InvNum', this).val(),
    //                SrnNo: $('#SrnNo', this).val()
    //            }

    //            if (trId == 0)
    //                trId = $(this).attr('data-trId') || 0

    //            list.push(orderItem);
    //        }
    //    })

    //    if (errorItemCount > 0) {
    //        $('#orderItemError').text(errorItemCount + " invalid entry in order item list.");
    //        isAllValid = false;
    //    }

    //    if (list.length == 0) {
    //        $('#orderItemError').text('At least 1 order item required.');
    //        isAllValid = false;
    //    }

    //    if ($('#EmpName').val().trim() == '') {
    //        $('#EmpName').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#EmpName').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if ($('#DocDate').val().trim() == '') {
    //        $('#DocDate').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#DocDate').siblings('span.error').css('visibility', 'hidden');
    //    }
    //    if ($('#DocDateF').val().trim() == '') {
    //        $('#DocDateF').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#DocDateF').siblings('span.error').css('visibility', 'hidden');
    //    }
    //    if ($('#DocDateT').val().trim() == '') {
    //        $('#DocDateT').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#DocDateT').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if ($('#CompId').val().trim() == '') {
    //        $('#CompId').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#CompId').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if ($('#EmpId').val().trim() == '') {
    //        $('#EmpId').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#EmpId').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if ($('#DocRemark').val().trim() == '') {
    //        $('#DocRemark').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#DocRemark').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if ($('#GrAmount').val().trim() == '') {
    //        $('#GrAmount').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#GrAmount').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if ($('#ExpsDisalw').val().trim() == '') {
    //        $('#ExpsDisalw').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#ExpsDisalw').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if ($('#RoundAmt').val().trim() == '') {
    //        $('#RoundAmt').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#RoundAmt').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if ($('#DocTotal').val().trim() == '') {
    //        $('#DocTotal').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#DocTotal').siblings('span.error').css('visibility', 'hidden');
    //    }
    //    if ($('#LocId').val().trim() == '') {
    //        $('#LocId').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#LocId').siblings('span.error').css('visibility', 'hidden');
    //    }
    //    if ($('#LocRunNum').val().trim() == '') {
    //        $('#LocRunNum').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#LocRunNum').siblings('span.error').css('visibility', 'hidden');
    //    }
    //    if ($('#DocNum').val().trim() == '') {
    //        $('#DocNum').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#DocNum').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if ($('#isLocked').val().trim() == '') {
    //        $('#isLocked').siblings('span.error').css('visibility', 'visible');
    //        isAllValid = false;
    //    }
    //    else {
    //        $('#isLocked').siblings('span.error').css('visibility', 'hidden');
    //    }

    //    if (isAllValid) {
    //        var data = {
    //            TrId: trId,
    //            EmpName: $('#EmpName').val().trim(),
    //            DocDateString: $('#DocDate').val().trim(),
    //            DocDateFString: $('#DocDateF').val().trim(),
    //            DocDateTString: $('#DocDateT').val().trim(),

    //            CompId: $('#CompId').val().trim(),
    //            EmpId: $('#EmpId').val().trim(),
    //            DocRemark: $('#DocRemark').val().trim(),
    //            GrAmount: $('#GrAmount').val().trim(),
    //            ExpsDisalw: $('#ExpsDisalw').val().trim(),
    //            RoundAmt: $('#RoundAmt').val().trim(),
    //            DocTotal: $('#DocTotal').val().trim(),
    //            LocId: $('#LocId').val().trim(),
    //            LocRunNum: $('#LocRunNum').val().trim(),
    //            DocNum: $('#LocRunNum').val().trim(),
    //            isLocked: $('#isLocked').val().trim(),
    //            LstTer1Details: list
    //        }

    //        $(this).val('Please wait...');

    //        $.ajax({
    //            type: 'POST',
    //            url: '/tTer/save',
    //            data: JSON.stringify(dataForAPI),
    //            contentType: 'application/json',
    //            success: function (data) {
    //                if (data.status) {
    //                    alert('Successfully saved');
    //                    //here we will clear the form
    //                    //dataForAPI = [];
    //                    //$('#EmpName,#DocDate,#DocDateF,#DocDateT,#CompId,#EmpId,#DocRemark,#GrAmount,#ExpsDisalw,#RoundAmt,#DocTotal,#LocId,#LocRunNum,#DocNum').val('');

    //                    $('#child_table_id').empty();
    //                    window.location.href = "/tTer/tTerListAll";
    //                }
    //                else {
    //                    alert('Error');
    //                }
    //                $('#submit').val('Save');
    //            },
    //            error: function (error) {
    //                console.log(error);
    //                $('#submit').val('Save');
    //            }
    //        });
    //    }

    //});



    var trId = getQueryStringParams()["trId"];
    if (typeof trId == 'undefined')
        var a = 0;//window.location.href = '/Department/Index';
    else {
        $('#trId').val(trId);
        LoadOrders();
    }
});
var deleteOrderIdArray = [];
function Remove(ID) {
    var ans = confirm("Are you sure you want to delete this Record?");
    if (ans) {
        $("#" + ID).remove();
        deleteOrderIdArray.push(ID);
    }
}

function Delete() {
    if (deleteOrderIdArray.length > 0) {
        $.each(deleteOrderIdArray, function (index, ID) {
            $.ajax({
                url: "/tTer/DeleteHome/" + ID,
                type: "POST",
                contentType: "application/json;charset=UTF-8",
                dataType: "json",
                success: function (result) {

                },
                error: function (errormessage) {
                    alert(errormessage.responseText);
                }
            });
        });
    }
}

renderChildform = function () {
    var $newRow = $('#mainrow');
    //$newRow.find("#BpName").val(order.BpName);
    //$newRow.find("#FCity").val(order.BpName);

};

renderOrderDetails = function (data) {
    try {
        var dateString = data.orders.DocDateString.split(' ')[0];
        var dateObj = $.datepicker.parseDate('dd-mm-yy', dateString)

        var dateFString = data.orders.DocDateFString.split(' ')[0];
        var dateFObj = $.datepicker.parseDate('dd-mm-yy', dateFString)

        var dateTString = data.orders.DocDateTString.split(' ')[0];
        var dateTObj = $.datepicker.parseDate('dd-mm-yy', dateTString)

        $('#DocDate').datepicker('setDate', new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate()));
        $('#DocDateF').datepicker('setDate', new Date(dateFObj.getFullYear(), dateFObj.getMonth(), dateFObj.getDate()));
        $('#DocDateT').datepicker('setDate', new Date(dateTObj.getFullYear(), dateTObj.getMonth(), dateTObj.getDate()));

    } catch (e) {
        console.error(e);
    }

    $('#DocDate').val(data.orders.DocDateString)
    $('#DocDateF').val(data.orders.DocDateFString)
    $('#DocDateT').val(data.orders.DocDateTString)
    $('#EmpName').val(data.orders.EmpName);
    $('#CompId').val(data.orders.CompId);
    $('#EmpId').val(data.orders.EmpId);
    $('#DocRemark').val(data.orders.DocRemark);
    $('#GrAmount').val(data.orders.GrAmount);
    $('#ExpsDisalw').val(data.orders.ExpsDisalw);
    $('#RoundAmt').val(data.orders.RoundAmt);
    $('#DocTotal').val(data.orders.DocTotal);
    $('#LocId').val(data.orders.LocId);
    $('#LocRunNum').val(data.orders.LocRunNum);
    $('#DocNum').val(data.orders.DocNum);
    $('#isLocked').val(data.orders.isLocked);



};

// Data should be an array
appendToChildTable = function (data) {
    var childTable = $("#child_table_id");
    var childTableBody = $(childTable).find("#child_table_tbody");
    data.forEach(function (rowData) {
        appendChildTableRow(childTableBody, rowData);
    });
};

appendChildTableRow = function (childTableBody, data) {
    var trow = $("<tr></tr>");
    $(trow).append("<td>" + data.BpName + "</td>");
    $(trow).append("<td>" + data.FCity + "</td>");
    var id = data.TrDetId;

    $(trow).append("<td><button onClick='onChildRowEditClick(" + id + ")'>Edit</button></td>");
    childTableBody.append(trow);
};

renderChildTable = function (LstTer1Details) {

    var childTable = $("#child_table_id");
    var childTableBody = $(childTable).find("#child_table_tbody");
    $(childTableBody).html("");
    LstTer1Details.forEach(function (rowData) {
        appendChildTableRow(childTableBody, rowData);
    });

};

onChildRowEditClick = function (id) { // "23"  23

    showUpdateForm();

    var item = childDataAll.find(function (row) { return (row.TrDetId == id) });

    console.log("row item ----", item);
    populateChildForm(item);
};

populateChildForm = function (data) {
    $("#BpName").val(data.BpName);
    $("#FCity").val(data.FCity);
    $("#TrDetId").val(data.TrDetId);

};

function onSubmitMasterForm() {
    var EmpName = $("#EmpName").val();
    var DocDate = $("#DocDate").val();
    var DocDateF = $("#DocDateF").val();
    var DocDateT = $("#DocDateT").val();
    var CompId = $('#CompId').val();
    var EmpId = $('#EmpId').val();
    var DocRemark = $('#DocRemark').val();
    var GrAmount = $('#GrAmount').val();
    var ExpsDisalw = $('#ExpsDisalw').val();
    var RoundAmt = $('#RoundAmt').val();
    var DocTotal = $('#DocTotal').val();
    var LocId = $('#LocId').val();
    var LocRunNum = $('#LocRunNum').val();
    var DocNum = $('#DocNum').val();
    var isLocked = $('#isLocked').val();

    var formData = {
        DocDate: DocDate,
        DocDateF: DocDateF,
        DocDateT: DocDateT,
        EmpName: EmpName,
        CompId: CompId,
        EmpId: EmpId,
        DocRemark: DocRemark,
        GrAmount: GrAmount,
        ExpsDisalw: ExpsDisalw,
        RoundAmt: RoundAmt,
        DocTotal: DocTotal,
        LocId: LocId,
        LocRunNum: LocRunNum,
        DocNum: DocNum,
        isLocked: isLocked
    };

    console.log("formData----", formData);
    parentForm = formData;
};
function onSubmitAddChildForm(eventType) {
    var BpName = $("#BpName").val();
    var FCity = $("#FCity").val();
    var TrDetId = $("#TrDetId").val();
    var TrId = $("#trId").val();
    debugger;
    if (eventType == "UPDATE") {
        alert("update");
        var formData = {
            TrDetId: TrDetId,
            BpName: BpName,
            FCity: FCity,
            TrId: trId,
        };


        // Find index of the record to replace in childDataAll array.
        var index = childDataAll.findIndex(function (ele) {
            return ele.TrDetId == TrDetId;
        });

        // Replace formData with older record in the array
        childDataAll.splice(index, 1, formData);

        console.log("childDataAll ---- ", childDataAll);

        renderChildTable(childDataAll);

    }
    else

    { // if new record created (form submit)

        var id = Math.random() * (-1);
        var formData = {
            TrDetId: id,
            BpName: BpName,
            FCity: FCity,
            TrId:trId,
        };
        newlyCreatedChild.push(formData);
        childDataAll.push(formData);

        console.log("newlyCreatedChild -----", newlyCreatedChild);
        var arr = [];
        arr.push(formData);
        appendToChildTable(arr);
    }
    // cleanForm
    $("#BpName").val("");
    $("#FCity").val("");

}

//edit row data
$("#mainrow").on('click', '#updateChildForm', function (e) {

    resetForm();
});
$("#mainrow").on('click', '#updateChildFormCancel', function (e) {
    resetForm();
    alert("cancel");
});

resetForm = function () {
    $("#createChildForm").show();
    $("#createChildFormCancel").show();
    $("#updateChildForm").hide();
    $("#updateChildFormCancel").hide();
};

showUpdateForm = function () {
    $("#createChildForm").hide();
    $("#createChildFormCancel").hide();
    $("#updateChildForm").show();
    $("#updateChildFormCancel").show();
}

// Save newly created child record to DB
function saveNewChildRecords() {
    $.ajax({
        type: "POST",
        url: "/tTer/GetTerMaster",
        data: newlyCreatedChild,
        success: function (data) {
            console.log("orders : ", data);
            if (data.status) {
                // Store into a variable for later use
                // lstTer1Details = data.orders.LstTer1Details;

                //renderOrderDetails(data);
                //renderChildTable(data.orders.LstTer1Details);


                //$('#child_table_id').DataTable();

            }
        },
        error: function (error) {
            console.log(error);
        }
    })
}

//fetch products
function LoadOrders() {
    $.ajax({
        type: "GET",
        url: "/tTer/GetTerMaster",
        data: { trId: parseInt($('#trId').val()) },
        success: function (data) {
            console.log("orders : ", data);

            if (data.status) {
                // Store into a variable for later use
                childDataAll = data.orders.LstTer1Details;

                renderOrderDetails(data);

                renderChildTable(data.orders.LstTer1Details);


                $('#child_table_id').DataTable();

            }
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function getQueryStringParams() {
    var vars = [], hash;
    if (window.location.href.indexOf('?') >= 0) {
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1].replace('#', '');
        }
    }
    return vars;
}
//LoadCategory($('#productCategory'));


// function--to chnage json date to javascript date
//function formatDate(inputStr) {
//    var timestamp = parseInt(inputStr, 10);
//    var date = new Date(timestamp);

//    return date.toISOString().substr(0,10);
//}