"use strict";

// Gamburger menu animation
function displayMenu(event) {
  $(".nav-menu").toggleClass("nav-menu-hide");
  $(".first").toggleClass("first-active");
  $(".second").toggleClass("second-active");
  $(".third").toggleClass("third-active");
  $(".fourth").toggleClass("fourth-active");
}

$(".gamburger-menu-wrapper").on('click', displayMenu);
$(".nav-menu").on('click', displayMenu); //---------------------------------------------------------------------------
//Page component animation

var isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);
document.addEventListener("DOMContentLoaded", scrolling, false);

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return top + height >= 0 && height + window.innerHeight >= bottom;
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return top >= 0 && bottom <= window.innerHeight;
} //that launches the page scroll handler 'scrolling'. 
//using the window.requestAnimationFrame method, we set the handler 'scrolling' call 
//on the next frame of the animation. This means that the current event handler 
//will be called about 60 times per second, which is a valid value when working 
//with DOM structures of various kinds.


function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }

  isScrolling = true;
}

var navMenu = $(".nav-menu")[0],
    statusBar = $(".status-bar")[0],
    recipeMenu = $(".recipe-menu")[0],
    news = $(".news")[0],
    chikenLegs = $(".chicken-legs")[0],
    bestRecipesWeek = $(".best-recipes-week")[0],
    pieInOneBowl = $(".pieInOneBowl")[0],
    cheeseCake = $(".cheeseCake")[0],
    simpleDrinks = $(".simpleDrinks")[0],
    whatIsHoney = $(".whatIsHoney")[0],
    howKneadDough = $(".howKneadDough")[0],
    bestMitballs = $(".bestMitballs")[0],
    recipes = $(".recipes h2")[0],
    categories = $(".categories")[0],
    recipeItemDuckLegs = $(".recipe-item-duck-legs")[0],
    recipeItemBeetrootSalad = $(".recipe-item-beetroot-salad")[0],
    recipeItemAmerPie = $(".recipe-item-amer-pie")[0],
    recipeItemCesar = $(".recipe-item-cesar")[0],
    recipeItemSote = $(".recipe-item-sote")[0],
    recipeItemFriedEggplant = $(".recipe-item-fried-eggplant")[0],
    recipeItemNavaren = $(".recipe-item-navaren")[0],
    recipeItemBrusselsSprouts = $(".recipe-item-brussels-sprouts")[0],
    recipeItemLiverCake = $(".recipe-item-liver-cake")[0],
    recipeItemCrabSalad = $(".recipe-item-crab-salad")[0],
    hotSelection = $(".hot-selection h2")[0],
    hangoverRecipes = $(".hangover-recipes")[0],
    maslenitsa = $(".maslenitsa")[0],
    recipesForChildren = $(".recipes-for-children")[0],
    healthyEating = $(".healthy-eating")[0],
    topAuthorsHeader = $(".top-authors h2")[0],
    topAuthors = $(".top-authors")[0],
    mailing = $(".mailing")[0],
    form = $(".form")[0],
    footerWrapper = $(".footer-wrapper")[0];

function scrolling(e) {
  if (isPartiallyVisible(navMenu)) {
    if ($(".logo").hasClass("hide-item")) {
      $(".logo").removeClass("hide-item").addClass("show-item");
    }

    if ($(".main-menu a").hasClass("hide-item")) {
      $(".main-menu .hide-item").removeClass("hide-item").addClass("show-item");
    }

    if ($(".nav-footer a").hasClass("hide-item")) {
      $(".nav-footer a").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(statusBar)) {
    if ($(".search").hasClass("hide-item")) {
      $(".status-bar .hide-item").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeMenu)) {
    if ($(".recipe-selection-header").hasClass("hide-item")) {
      $(".recipe-selection-header").removeClass("hide-item").addClass("show-item");
    }

    if ($(".filter-item").hasClass("hide-item")) {
      $(".recipe-menu .hide-item").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(news)) {
    if ($(".recipe-selection-header").hasClass("hide-item")) {
      $(".recipe-selection-header").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(chikenLegs)) {
    if ($(".chicken-legs").hasClass("hide-item")) {
      $(".chicken-legs").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(bestRecipesWeek)) {
    if ($(".best-recipes-week").hasClass("hide-item")) {
      $(".best-recipes-week").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(pieInOneBowl)) {
    if ($(".pieInOneBowl").hasClass("hide-item")) {
      $(".pieInOneBowl").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(cheeseCake)) {
    if ($(".cheeseCake").hasClass("hide-item")) {
      $(".cheeseCake").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(simpleDrinks)) {
    if ($(".simpleDrinks").hasClass("hide-item")) {
      $(".simpleDrinks").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(whatIsHoney)) {
    if ($(".whatIsHoney").hasClass("hide-item")) {
      $(".whatIsHoney").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(howKneadDough)) {
    if ($(".howKneadDough").hasClass("hide-item")) {
      $(".howKneadDough").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(bestMitballs)) {
    if ($(".bestMitballs").hasClass("hide-item")) {
      $(".bestMitballs").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipes)) {
    if ($(".recipes h2").hasClass("hide-item")) {
      $(".recipes h2").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(categories)) {
    if ($(".categories").hasClass("hide-item")) {
      $(".categories").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemDuckLegs)) {
    if ($(".recipe-item-duck-legs").hasClass("hide-item")) {
      $(".recipe-item-duck-legs").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemBeetrootSalad)) {
    if ($(".recipe-item-beetroot-salad").hasClass("hide-item")) {
      $(".recipe-item-beetroot-salad").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemAmerPie)) {
    if ($(".recipe-item-amer-pie").hasClass("hide-item")) {
      $(".recipe-item-amer-pie").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemCesar)) {
    if ($(".recipe-item-cesar").hasClass("hide-item")) {
      $(".recipe-item-cesar").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemSote)) {
    if ($(".recipe-item-sote").hasClass("hide-item")) {
      $(".recipe-item-sote").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemFriedEggplant)) {
    if ($(".recipe-item-fried-eggplant").hasClass("hide-item")) {
      $(".recipe-item-fried-eggplant").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemNavaren)) {
    if ($(".recipe-item-navaren").hasClass("hide-item")) {
      $(".recipe-item-navaren").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemBrusselsSprouts)) {
    if ($(".recipe-item-brussels-sprouts").hasClass("hide-item")) {
      $(".recipe-item-brussels-sprouts").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemLiverCake)) {
    if ($(".recipe-item-liver-cake").hasClass("hide-item")) {
      $(".recipe-item-liver-cake").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipeItemCrabSalad)) {
    if ($(".recipe-item-crab-salad").hasClass("hide-item")) {
      $(".recipe-item-crab-salad").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(hotSelection)) {
    if ($(".hot-selection h2").hasClass("hide-item")) {
      $(".hot-selection h2").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(hangoverRecipes)) {
    if ($(".hangover-recipes").hasClass("hide-item")) {
      $(".hangover-recipes").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(maslenitsa)) {
    if ($(".maslenitsa").hasClass("hide-item")) {
      $(".maslenitsa").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(recipesForChildren)) {
    if ($(".recipes-for-children").hasClass("hide-item")) {
      $(".recipes-for-children").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(healthyEating)) {
    if ($(".healthy-eating").hasClass("hide-item")) {
      $(".healthy-eating").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(topAuthorsHeader)) {
    if ($(".top-authors h2").hasClass("hide-item")) {
      $(".top-authors h2").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(topAuthors)) {
    if ($(".set-of-authors-item").hasClass("hide-item")) {
      $(".set-of-authors-item").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(mailing)) {
    if ($(".mailing h5").hasClass("hide-item")) {
      $(".mailing h5").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(form)) {
    if ($(".form").hasClass("hide-item")) {
      $(".form").removeClass("hide-item").addClass("show-item");
    }
  }

  if (isPartiallyVisible(footerWrapper)) {
    if ($(".footer-wrapper a").hasClass("hide-item")) {
      $(".footer-wrapper a").removeClass("hide-item").addClass("show-item");
    }
  }
}
//# sourceMappingURL=script.js.map
