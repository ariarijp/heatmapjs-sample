class IndexController < ApplicationController
  def index
    @show_heatmap = false
  end

  def heatmap
    @show_heatmap = true
    render :index
  end
end
