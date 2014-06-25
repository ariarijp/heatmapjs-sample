class PointsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  # POST /points
  # POST /points.json
  def create
    @point = Point.new(point_params)

    respond_to do |format|
      if @point.save
        format.json { render json: @point }
      else
        format.json { render json: @point.errors, status: :unprocessable_entity }
      end
    end
  end

  def summary
    sum = Point.group(:x, :y).select("x, y, COUNT(*) count")
    render :json => sum
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_point
      @point = Point.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def point_params
      params.require(:point).permit(:x, :y)
    end
end
