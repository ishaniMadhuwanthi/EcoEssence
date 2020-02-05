import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import PriceDialog from "../PriceDialog/PriceDialog";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

class ProductsHeader extends Component {
  state = {
    openPriceDialog: false
  };

  getTitle() {
    let pageTitle = "Search results";
    let categoryName = queryString.parse(this.props.location.search).category;
    let itemCategoryClicked =
      queryString.parse(this.props.location.search).itemCategoryClicked ===
      "true";

    if (!categoryName) {
      pageTitle = "Popular products";
    } else if (itemCategoryClicked) {
      pageTitle = categoryName;
    }
    return pageTitle;
  }

  render() {
    let { parsedQS, totalItemsCount, updateQueryString } = this.props;
    let usePriceFilter = parsedQS.usePriceFilter === "true";
    let minPrice = parsedQS.minPrice || 0;
    let maxPrice = parsedQS.maxPrice || 1000;
    let sortValue = parsedQS.sortValue || "lh";

    return (
      <div>
        <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
          <div style={{ flex: 1, fontSize: 24 }}>
            <div>{this.getTitle()}</div>
            <div style={{ fontSize: 12, color: "gray", marginTop: 5 }}>
              Total results found: {totalItemsCount}
            </div>
          </div>

          <FormControlLabel
            control={
              <Checkbox
                color="success"
                checked={usePriceFilter}
                onChange={e => {
                  updateQueryString({
                    usePriceFilter: e.target.checked,
                    page: 1
                  });
                }}
              />
            }
            label="Filter by price"
          />
          {usePriceFilter && (
            <Tooltip title="Click here to change range" disableFocusListener>
              <Button
                variant="outlined"
                color="default"
                style={{ marginRight: 20 }}
                onClick={() => {
                  this.setState({
                    openPriceDialog: true
                  });
                }}
              >
                {minPrice + "$ - " + maxPrice + "$"}
              </Button>
            </Tooltip>
          )}
          <Select
            value={sortValue}
            onChange={e => {
              updateQueryString({ sortValue: e.target.value });
            }}
          >
            <MenuItem value={"lh"}>Sort by price: low to high</MenuItem>
            <MenuItem value={"hl"}>Sort by price: high to low</MenuItem>
          </Select>
        </div>

        {/* This is dialog which opens up for setting price filter */}
        <PriceDialog
          open={this.state.openPriceDialog}
          min={minPrice}
          max={maxPrice}
          onSave={(min, max) => {
            this.setState({ openPriceDialog: false });
            updateQueryString({ minPrice: min, maxPrice: max, page: 1 });
          }}
          onClose={() =>
            this.setState({
              openPriceDialog: false
            })
          }
        />
      </div>
    );
  }
}

export default withRouter(ProductsHeader);
