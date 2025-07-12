/**
 * Work Day Scheduler Script
 * - Modular, accessible, and maintainable
 * - Uses jQuery for DOM manipulation
 * - Color-codes time blocks based on current hour
 * - Saves and loads data from localStorage
 */

const TIME_BLOCKS = [
  { id: 'nine', hour: 9, label: '9:00AM' },
  { id: 'ten', hour: 10, label: '10:00AM' },
  { id: 'eleven', hour: 11, label: '11:00AM' },
  { id: 'twelve', hour: 12, label: '12:00PM' },
  { id: 'one', hour: 13, label: '1:00PM' },
  { id: 'two', hour: 14, label: '2:00PM' },
  { id: 'three', hour: 15, label: '3:00PM' },
  { id: 'four', hour: 16, label: '4:00PM' },
  { id: 'five', hour: 17, label: '5:00PM' }
];

function intervalUpdate() {
  setInterval(function() {
    dateCheck();
    changeColors();
  }, 1000);
}

function dateCheck() {
  var d = new Date();
  $("#date").html(d.toLocaleString());
}

function changeColors() {
  var h = new Date().getHours();
  TIME_BLOCKS.forEach(block => {
    const $input = $("#" + block.id);
    if (h < block.hour) {
      $input.css("background-color", "#77dd77"); // future
    } else if (h === block.hour) {
      $input.css("background-color", "red"); // present
    } else {
      $input.css("background-color", "#d3d3d3"); // past
    }
  });
}

function loadData() {
  dateCheck();
  intervalUpdate();
  changeColors();
  TIME_BLOCKS.forEach(block => {
    $("#" + block.id).val(localStorage.getItem(block.id) || "");
  });
}

// Save only the relevant block, and provide ARIA live feedback
function saveData(blockId) {
  if (blockId) {
    localStorage.setItem(blockId, $('#' + blockId).val());
    showSaveFeedback(blockId);
  } else {
    // fallback: save all
    TIME_BLOCKS.forEach(block => {
      localStorage.setItem(block.id, $('#' + block.id).val());
    });
  }
}

// Show ARIA live feedback for save action
function showSaveFeedback(blockId) {
  let $feedback = $('#save-feedback');
  if ($feedback.length === 0) {
    $feedback = $('<div id="save-feedback" aria-live="polite" class="sr-only"></div>').appendTo('body');
  }
  $feedback.text('Saved ' + (blockId ? $('#' + blockId).attr('aria-label') : 'all blocks'));
  setTimeout(() => $feedback.text(''), 1500);
}

// Keyboard accessibility: allow Enter key to save the block
$(document).ready(function() {
  TIME_BLOCKS.forEach(block => {
    $('#' + block.id).on('keydown', function(e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        saveData(block.id);
        // Move focus to feedback for screen reader
        $('#save-feedback').focus();
      }
    });
    // Also allow save button to be triggered by keyboard
    $("button.save[aria-label='Save " + block.label + "']").on('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        saveData(block.id);
        $('#save-feedback').focus();
      }
    });
  });
});